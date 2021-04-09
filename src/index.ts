// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import { buildGraphbackAPI } from 'graphback';
import { createMongoDbProvider } from '@graphback/runtime-mongo';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { loadConfigSync } from 'graphql-config';
import { connectDB } from './db';
import { noteResolvers } from './resolvers/noteResolvers';
const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);


async function start() {
  const app = express();

  app.use(cors());

  const graphbackExtension = 'graphback';
  const config = loadConfigSync({
    extensions: [
      () => ({
        name: graphbackExtension
      })
    ]
  });

  const projectConfig = config.getDefault();
  const graphbackConfig = projectConfig.extension(graphbackExtension);

  const modelDefs = projectConfig.loadSchemaSync(graphbackConfig.model);

  const db = await connectDB();

  const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {
    dataProviderCreator: createMongoDbProvider(db)
  });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: [resolvers, noteResolvers],
    context: contextCreator
  });

  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    httpServer.listen(4000, ()=>{
       console.log('Server run in 4000 port');
    });
  });
  /*httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000/graphql`);
  });*/
}

start().catch((err: any) => console.log(err));

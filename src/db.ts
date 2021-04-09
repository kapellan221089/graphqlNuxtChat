import { MongoClient } from 'mongodb';

export async function connectDB() {
  let url: string

  const {DB_HOST, DB_PORT, DB_DATABASE} = process.env;

    url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
  

  const mongoClient = await MongoClient.connect(url, { useUnifiedTopology: true });

  // get db instance
  const db = mongoClient.db(process.env.DB_DATABASE);

  return db;
}

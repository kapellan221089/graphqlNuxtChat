//const hooks = require('./hooks')
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  dev: (process.env.NODE_ENV !== 'production'),
  telemetry: false,

  //hooks: hooks(this),

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#0B1924' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css',
    //'animate.css'
  ],
  plugins: [
    '@/plugins/vue-chat-scroll.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
//    'nuxt-buefy',
    '@nuxtjs/apollo',
    ['nuxt-fontawesome', {
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faCog', 'faEdit']
        }
      ]
    }]
  ],
  

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        wsEndpoint: 'ws://localhost:4000/graphql',
        websocketsOnly: true,
      },
    }
  }
}
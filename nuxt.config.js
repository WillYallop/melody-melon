export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'swiper/dist/css/swiper.css',
  ],
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false } ,
    { src: '~/plugins/vue-closable.js', ssr: false },
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronDown', 'faChevronUp', 'faChevronRight', 'faChevronLeft', 'faSearch', 'faHeadphones', 'faBars']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram', 'faFacebookF', 'faSpotify']
        }
      ]
    }],

  ],
  axios: {},
  build: {
  },
  env: {
    authHeader: 'Bearer UUt0YVA0NjlXK0VU',
    apiBaseUrl: 'https://api.melodymelon.com'
  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  }
}

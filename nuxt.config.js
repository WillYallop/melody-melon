export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme_color', content: '#080808' },
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
    'nuxt-lazy-load',
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
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    '@nuxtjs/pwa'
  ],
  axios: {},
  build: {
  },
  pwa: { 
    workbox: {}, 
    meta: { 
      theme_color: '#000000', 
      background_color: "#080808",
      lang: 'en', 
      nativeUI: true,
      description: "Melody Melon",
    }, 
    icon: {}, 
    manifest: { 
      name: 'Melody Melon', 
      lang: 'en', 
      display: 'standalone' 
    } 
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

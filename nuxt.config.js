export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Melody Melon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme_color', content: '#080808' },
      { hid: 'description', name: 'description', content: 'Discover a wide range of fruity playlists to fuel your day! Discover and promote music with Melody Melon!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'swiper/dist/css/swiper.css',
  ],
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/vue-closable.js', ssr: false },
    { src: '~plugins/social.js', ssr: false }
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronDown', 'faChevronUp', 'faChevronRight', 'faChevronLeft', 'faSearch', 'faHeadphones', 'faBars', 'faTimes', 'faUserCircle', 'faCalendarAlt', 'faEnvelope']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram', 'faFacebookF', 'faSpotify', 'faFacebook', 'faTwitter']
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
    ]
  ],
  robots: {
    UserAgent: '*'

  },
  sitemap: {
    hostname: 'https://dev.melodymelon.com',
    gzip: true,

  },
  axios: {},
  build: {
  },
  pwa: { 
    workbox: true,
    icon: {
      fileName: 'icon.png'
    },
    meta: { 
      name: 'Melody Melon',
      theme_color: '#080808', 
      author: 'William Yallop',
      lang: 'en', 
      nativeUI: true,
      description: "Discover awesome playlists!",
    }, 
    manifest: { 
      name: 'Melody Melon', 
      short_name: 'Melody Melon', 
      lang: 'en', 
      display: 'standalone',
      background_color: '#080808',
      theme_color: '#080808'
    } 
  },
  env: {
    authHeader: 'Bearer UUt0YVA0NjlXK0VU',
    apiBaseUrl: 'https://api.melodymelon.com'
  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}

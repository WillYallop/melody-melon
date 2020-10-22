export default {
  ssr: true,
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Melody Melon',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme_color', content: '#080808' },
      {
        hid: "og:image",
        property: 'og:image',
        content: 'https://drive.google.com/uc?export=view&id=1xq8KXg3tlNhdb9Lev-Rh8SvoGMRqkCLM'
      }
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
    '@aceforth/nuxt-optimized-images',
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    ['nuxt-canonical', { baseUrl: 'https://melodymelon.com' }],
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
  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 85,
    },
    
  },
  robots: {
    UserAgent: '*'

  },
  sitemap: {
    hostname: 'https://melodymelon.com',
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
      nativeUI: true
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
    port: process.env.PORT || 8000,
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

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
  ],
  axios: {},
  build: {
  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  }
}

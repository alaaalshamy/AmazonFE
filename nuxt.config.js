
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  // bootstrapVue: {
  //   bootstrapCSS: false,
  //   bootstrapVueCSS: false
  // },
  // styleResources: {
  //   scss: [
  //     'bootstrap/scss/_functions.scss',
  //     'bootstrap/scss/_variables.scss',
  //     'bootstrap/scss/_mixins.scss',
  //     'bootstrap-vue/src/_variables.scss',
  //     '@static/css/all.css',
  //     '@static/css/default.css',
  //     '@static/css/product.css',

  //   ],
  // },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },





    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    // '@/static/css/default.css',
    '@/static/css/font-awesome/css/all.css',
    '@/static/css/product.css',
    // '@/static/css/font-awesome/webfonts',

  ],
  js: [
    '@/assets/js/bootstrap.min.js' //**bootstrap js */
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',

    '@nuxtjs/vuetify',

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'vuetify-dialog/nuxt',
    '@nuxtjs/vuetify',

    // Doc: https://github.com/nuxt-community/style-resources-module
    'nuxt-fontawesome',

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',

  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

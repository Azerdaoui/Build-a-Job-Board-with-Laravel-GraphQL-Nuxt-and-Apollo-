export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jobsclient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // auth: {
  //   redirect: {
  //     login: '/login',
  //     logout: '/',
  //     callback: '/login',
  //     home: '/'
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/login', method: 'post', propertyName: false },
  //         user: { url: '/api/user', method: 'get', propertyName: false }
  //       },
  //       tokenRequired: false,
  //       tokenType: false
  //     }
  //   },
  //   localStorage: false
  // },

  auth: {
    strategies: {
      local: {
        autoFetchUser: false,
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: false },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: false },
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    localStorage: false
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://jobs.test',
    credentials: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

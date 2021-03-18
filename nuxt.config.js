export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'primeiro-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/animate.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: "#14C6FF",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          lightblue: "#14c6FF",
          yellow: "#FFCF00",
          pink: "#FF1976",
          orange: "#FF8657",
          magenta: "#C33AFC",
          darkblue: "#1E2D56",
          gray: "#909090",
          neutralgray: "#9BA6C1",
          green: "#2ED47A",
          red: "#FF5c4E",
          darkblueshade: "#308DC2",
          lightgray: "#BDBDBD",
          lightpink: "#FFCFE3",
          white: "#FF1976",
          eriton: "#FF1976"
        }

      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}

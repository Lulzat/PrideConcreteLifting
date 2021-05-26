export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pride Concrete Lifting and Repair in Dallas / Fort Worth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Concrete Lifting and Repair and Soil Stabilization for Driveways Repair, Pool Deck Lifting with foam injection in Dallas & Fort Worth.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPhone']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faEnvelope']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPaperPlane']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faTools']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faProjectDiagram']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faIdCard']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faCheck']
          },
          {set: '@fortawesome/free-solid-svg-icons',
          icons: ['faSatelliteDish']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faLinkedin']
          },
      ]
   }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}

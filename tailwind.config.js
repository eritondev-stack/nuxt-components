module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        nuxt: {
          azul: 'rgb(0,80,190)',
          trans: 'rgba(0,0,0,0.2)'
        }
      },
      maxWidth: {
        'modal-max': '90rem'
      }
    },
  },
  variants: {},
  plugins: [],
}

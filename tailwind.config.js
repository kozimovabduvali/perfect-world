/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: '512px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'display': ['XITS', 'serif'],
        'Involve': ['Involve', 'serif'],
        'manrope': ['Manrope', 'serif'],
      },
      maxWidth: {
        'base': '100.5rem',
      },
      colors: {
        black: '#000000',
        'black-200': '#171717',
        'black-300': '#050505',
        'base-blue': '#335B82',
        white: '#FFFFFF',
        'active-menu': '#FBE28A',
        brand: {
          'black': '#2C85DE',
          'black-200': '#0078F0',
          'gray-700': '#424242',
        }
      },
      boxShadow: {
        'custom': '0px 0px 6px 0px #fbe280',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   backgroundRegister: "url('../src/assets/images/Ellipse.webp')",
      // },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#E70162',
          'primary-content': '#FFFFFF',
          success: '#2D6500',
          'dark-content': 'black',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
}

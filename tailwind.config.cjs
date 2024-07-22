const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/svelte-ux/**/*.{svelte,js}'],

  theme: {
    extend: {
      colors: {
        accent: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('svelte-ux/plugins/tailwind.cjs')]
};

module.exports = config;
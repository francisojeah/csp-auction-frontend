/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
  screens: {
    ...defaultTheme.screens,
  },
};
export const variants = {
  extend: {}
};
export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./node_modules/flyonui/dist/js/*.js", 
  ],
  theme: {
    // ...
  },
  plugins: [
    require("flyonui"), 
    require("flyonui/plugin"),
  ],
};
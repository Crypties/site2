const withMT = require('next-transpile-modules')(["@material-tailwind/react"]); // require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
})
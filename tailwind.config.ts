

import type { Config } from "tailwindcss";
// Import the Flowbite plugin
// import flowbitePlugin  from "flowbite/plugin"
// import formsPlugin from '@tailwindcss/forms';


const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html" // Additional paths from the new configuration
  ],
  theme: {
    extend: {


      // Field to add custom rgb color. Here, was added custom name 'hMenuColor'
      colors:{
        hMenuColor: 'rgb(102,102,245)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Inlude Flowbite plugin in plugins array
  // plugins: [flowbitePlugin, formsPlugin],
};
export default config;

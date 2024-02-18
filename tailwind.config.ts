import type { Config } from "tailwindcss";
// Import the Flowbite plugin
// import flowbitePlugin  from "flowbite/plugin"
// import formsPlugin from '@tailwindcss/forms';


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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

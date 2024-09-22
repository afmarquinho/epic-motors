import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#16bddf',
         'custom-purple': '#68297f'
        //'custom-green': '#87CEEB',
        //'custom-purple': '#E6E6FA'
      },
    },
  },
  plugins: [],
};
export default config;

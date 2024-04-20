import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
}
// pallete colors
// primary Navbar : gray 200 dark mode : gray 950 // secundary : sky 400 dark mode : sky 600
// primary content : gray 50 dark mode : gray 900 // secundary : sky 400 dark mode : sky 600
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  container: {
    padding: '1rem',
    center: true,
  },
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans'],
        playFair: ['Playfair Display'],
      },
      screens: {
        small: '32.875em',
      },
    },
  },
  plugins: [],
};
export default config;

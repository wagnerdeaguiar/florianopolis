import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#0077B6',
        sand: '#F4D58D',
        sunset: '#EE6C4D',
        lagoon: '#0096C7',
        azorean: '#0A4F70',
      },
    },
  },
  plugins: [],
};

export default config;

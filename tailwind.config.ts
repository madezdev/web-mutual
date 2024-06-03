import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      avantXlt: "AvantXlt",
      avantMd: "AvantMd",
      avantDem: "AvantDemi",
      avantBk: "AvantBook",
      avantBold: "AvantBold",
      avenirBk: "AvenirBook",
      avenirHv: "AvenirHeavy",
    },
    fontSize: {
      psm: "0.75rem", //12px
      p: "1rem", //16px
      h1: "2.188rem", //35px
      h2: "1.938rem", //31px
      h3: "1.688rem", //27px
      h4: "1.5rem", //24px
      h5: "1.375rem", //22px
      h6: "1.188rem", //19px
      maxtitle: "clamp(2rem, 0.179rem + 4.857vw, 4.55rem)",
      title: "clamp(1.5rem, 1.009rem + 1.31vw, 2.188rem)",
      subtitle: "clamp(1.125rem, 0.865rem + 0.857vw, 1.688rem)",
      maxparrafo: "clamp(1.25rem, 0.893rem + 0.952vw, 1.25rem)",
      parrafo: "clamp(0.625rem, 0.451rem + 0.571vw, 1rem)",
      mbTitle: "clamp(1.5rem, 0rem + 7.5vw, 3.5rem)",
      mbSubtitle: "clamp(1.5rem, 0.5rem + 5vw, 2.5rem)",
    },
    colors: {
      colorP: "#1F6A93",
      colorS: "#DA2127",
      colorT: "#FEC212",
      colorAcento: "#0A374F",
      colorW: "#ffffff",
      colorB: "#000000",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;

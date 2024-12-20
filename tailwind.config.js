/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3731A1", // Warna biru
        lightPurple: "#A5B4FC", // Ungu muda
      },
      backgroundImage: {
        custom:
          "linear-gradient(50deg, rgba(0, 0, 0, 0) 13.98%, rgba(99, 102, 241, 0.20) 79.25%), #3730A3",
      },
      width: {
        22: "5.625rem", // 90px
        15: "3.75rem", // 60px
        97: "29.25rem", // 468px
      },
      height: {
        22: "5.625rem", // 90px
        19: "4.6875rem", // 75px
        98: "30.3125rem", // 485px
      },
      maxWidth: {
        97: "29.25rem", // 468px
      },
      maxHeight: {
        98: "30.3125rem", // 485px
      },
    },
  },
  plugins: [preline, flowbite],
};

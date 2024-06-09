/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-50-50": "linear-gradient(to top, #1A1A1A 50%, #1F1F1F 50%)",
      },
      fontSize: {
        title: "77px",
        "title-lg": "128px",
        content: "32px",
        bullet: "35px",
        sm: "14px",
      },
    },
  },
  plugins: [],
};

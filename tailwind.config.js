module.exports = {
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./pages/index.tsx",
    ],
    options: {
      safelist: [
        "w-24",
        "h-24",
        "w-32",
        "h-32",
        "w-64",
        "h-64",
        "w-96",
        "h-96",
      ],
    },
  },
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

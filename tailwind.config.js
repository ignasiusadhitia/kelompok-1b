/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue-100": "#0E1F51",
        "dark-blue-75": "#0E1F51BF",
        "dark-blue-50": "#0E1F515F",
        "dark-blue-25": "#0E1F5100",
        "dark-blue-10": "#0E1F511A",
        "peach-red-100": "#FF3E54",
        "peach-red-75": "#FF3E54BF",
        "peach-red-50": "#FF3E545F",
        "peach-red-25": "#FF3E5400",
        "peach-red-10": "#FF3E541A",
        "black-shade": "##252525",
        "off-white": "#F7F7F7",
        white: "#ffffff",
      },
      fontSize: {
        h1: "4rem", // Title / Header 1
        h2: "2.5rem", // Title / Header 2
        h3: "1.5rem", // Title / Header 3
        subtitle: "1.5rem", // Subtitle / Header 3 / Bigcopy
        strong: "1rem", // Strong / Bold
        bodycopy: "1rem", // Bodycopy / em
        small: "0.875rem", // Small Copy
        button: "0.625rem", // Button Text
        pretext: "0.625rem", // Pretext
        label: "0.625rem", // Label
      },
      lineHeight: {
        h1: "4.6875rem", // Title / Header 1
        h2: "2.9375rem", // Title / Header 2
        h3: "1.75rem", // Title / Header 3
        subtitle: "1.75rem", // Subtitle / Header 3 / Bigcopy
        strong: "1.1875rem", // Strong / Bold
        bodycopy: "1.1875rem", // Bodycopy / em
        small: "1rem", // Small Copy
        button: "0.75rem", // Button Text
        pretext: "0.75rem", // Pretext
        label: "0.75rem", // Label
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontStyle: {
        italic: "italic",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1110px",
          xl: "1110px",
          "2xl": "1110px",
        },
      },
    },
  },
  plugins: [],
};

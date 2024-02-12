/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      colors: {
        primary: "var(--primary)",
        onPrimary: "var(--on-primary)",
        primaryLight: "var(--primary-light)",
        primaryActive: "var(--primary-active)",
        background: "var(--background)",
        backgroundContrast: "var(--background-contrast)",
        backgroundLight: "var(--background-light)",
        textDefault: "var(--text)",
        textSecondary: "var(--text-secondary)",
        disabled: "var(--disabled)",
        borderDefault: "var(--border)",
        error: "var(--error)",
      },
      height: {
        header: "calc(var(--header-height) * 1rem)",
      },
      inset: {
        header: "calc((var(--header-height) + 1) * 1rem)",
      },
      gridTemplateColumns: {
        cartItems: "1fr auto auto auto",
        cartItemsSmall: "1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

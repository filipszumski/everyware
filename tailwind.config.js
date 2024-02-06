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
        primaryBackground: "var(--primary-background)",
        onPrimaryBackground: "var(--on-primary-background)",
        primaryActive: "var(--primary-active)",
        background: "var(--background)",
        neutralBackground: "var(--neutral-background)",
        defaultText: "var(--text)",
        textSecondary: "var(--text-secondary)",
        disabled: "var(--disabled)",
        defaultBorder: "var(--border)",
        error: "var(--error)",
      },
      height: {
        header: "calc(var(--header-height) * 1px)",
      },
      inset: {
        header: "calc((var(--header-height) + 12) * 1px)",
      },
      gridTemplateColumns: {
        cartItems: "1fr auto auto auto",
        cartItemsSmall: "1fr auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

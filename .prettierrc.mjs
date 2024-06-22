// .prettierrc.mjs

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-organize-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 9999, // Because of tailwind :)
      },
    },
  ],
};
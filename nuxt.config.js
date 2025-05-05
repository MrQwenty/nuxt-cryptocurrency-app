export default {
  ssr: true,
  target: "server",
  buildDir: "dist", // Cambia la directory di build in "dist"
  generate: {
    dir: "dist",
  },
  head: {
    title: "Criptovalute",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
  },
  plugins: ["~/plugins/axios.ts"],
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "https://pro-api.coinmarketcap.com/v1/",
  },
  serverMiddleware: [
    { path: "/api/geo-check", handler: "~/server-middleware/geo-check.js" },
  ],
  env: {
    CMC_API_KEY:
      process.env.CMC_API_KEY || "c3f841e7-0fff-4d8e-985f-248d29747571",
  },
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};

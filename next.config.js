/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL_API_STRAPI: process.env.BASE_URL_API_STRAPI,
    BASE_URL_STRAPI: process.env.BASE_URL_STRAPI,
    ENDPOINT_REGISTER: process.env.ENDPOINT_REGISTER,
    ENDPOINT_LOGIN: process.env.ENDPOINT_LOGIN,
    JWT_SECRECT_KEY_STRAPI: process.env.JWT_SECRECT_KEY_STRAPI,
    ENDPOINT_PRODUCT_EQUIPMENTS: process.env.ENDPOINT_PRODUCT_EQUIPMENTS,
 },
 images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '*',
    },
  ],
},
// basePath: '/mpr'
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const withImages = require("next-images")

const nextConfig = withImages({
    reactStrictMode: true,
    trailingSlash: true,
    distDir: "out",
    experimental: {
        forceSwcTransforms: true,
      },
    images: {
        //unoptimized: true,
        loader: "custom",
        loaderFile: "./loader.js",
        formats: ["image/avif", "image/webp"],
        disableStaticImages: true,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: [
            "my-landing-page-52061.web.app",
            "firebasestorage.googleapis.com",
            "assets.poap.xyz",
            "www.unicohogar.com",
        ],
    },
})
module.exports = nextConfig

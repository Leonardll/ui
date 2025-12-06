/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: __dirname,
    },
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
        remotePatterns: [
            {
                protocol: "https",
                hostname: "my-landing-page-52061.web.app",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
            },
            {
                protocol: "https",
                hostname: "assets.poap.xyz",
            },
            {
                protocol: "https",
                hostname: "www.unicohogar.com",
            },
        ],
    },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withImages = require("next-images")

const nextConfig = withImages({
    reactStrictMode: true,
    images: {
        // unoptimized: true,

        loader: "custom",
        loaderFile: "./utils/loader.js",
        formats: ["image/avif", "image/webp"],
        //disableStaticImages: true,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: [
            "my-landing-page-52061.web.app",
            "firebasestorage.googleapis.com",
            "assets.poap.xyz",
            "www.unicohogar.com",
        ],
    },
    module: {
        rules: [
            //...
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        //loader: ["file-loader"],
                        options: {
                            name: "images/[hash]-[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
})
module.exports = nextConfig

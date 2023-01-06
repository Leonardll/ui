/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: [
            "my-landing-page-52061.web.app",
            "firebasestorage.googleapis.com",
            "assets.poap.xyz",
            "www.unicohogar.com",
        ],
    },
}

module.exports = nextConfig

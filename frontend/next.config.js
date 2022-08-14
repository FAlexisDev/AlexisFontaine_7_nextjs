/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: true,
            },
        ];
    },
};

module.exports = {
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
};

module.exports = {
    images: {
        domains: ["localhost"],
    },
};

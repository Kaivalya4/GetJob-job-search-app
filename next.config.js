/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cloudflare-ipfs.com",
                // You can add these as well
                // port: '',
                // pathname: 'arifscloud/image/upload/**',
            },
        ],
        domains: ["https://cloudflare-ipfs.com"],
        loader: "akamai",
        path: " ",
        unoptimized: true,
        basePath: "/GetJob-job-search-app",
        assetPrefix: "/GetJob-job-search-app",
    },
};

module.exports = nextConfig;

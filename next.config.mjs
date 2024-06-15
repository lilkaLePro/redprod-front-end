/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source : '/uploads/:path*',
                destination: 'http://localhost:8080/uploads/*path',
            }
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
            {
                hostname: "res.cloudinary.com"
            },
            {
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
  },
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;

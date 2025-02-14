/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: ['i.ibb.co.com'],
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com"
      },
      {
        protocol: "https",
        hostname: "wiki.lineageos.org"
      },
      {
        protocol: "https",
        hostname: "www.static-src.com"
      }
    ]
  }
};

export default nextConfig;

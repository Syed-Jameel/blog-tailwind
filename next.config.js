/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "www.w3.org", "images.unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/team",
        destination: "/",
        permanent: false,
      },
      {
        source: "/reports",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

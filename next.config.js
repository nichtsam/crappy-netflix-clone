/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "image.tmdb.org"],
  },
  redirects: () => [
    {
      source: "/",
      destination: "/browse",
      permanent: false,
    },
  ],
  experimental: {
    newNextLinkBehavior: true,
  },
};

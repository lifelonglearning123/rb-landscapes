/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Site-plan URLs whose search is already covered by an existing page.
  async redirects() {
    return [
      ["/services/resin", "/services/resin-driveways"],
      ["/services/patio-paving", "/services/patios"],
      ["/services/all-aspects-of-decking", "/services/decking"],
      ["/services/brickwork-and-blockwork", "/services/brickwork"],
      ["/services/block-work", "/services/brickwork"],
      ["/services/brick-paver-installation", "/services/block-paving"],
      ["/services/paver-installation", "/services/block-paving"],
      ["/services/free-estimate", "/contact"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};
export default nextConfig;

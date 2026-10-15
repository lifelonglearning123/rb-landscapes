/* Permanent redirects for URLs whose search is already covered by another
   page, so they never compete with it:
   - plan service URLs that duplicate an existing service
   - plan area URLs for single postcodes, and Trowbridge BA14 (the home page)
   - the site's original service slugs, renamed to the plan's URLs */
const REDIRECTS = {
  "/services/brick-paver-installation": "/services/block-paving",
  "/services/paver-installation": "/services/block-paving",
  "/services/block-work": "/services/brickwork-and-blockwork",
  "/services/driveway-replacement": "/services/driveway-installation",
  "/services/crack-filling-and-sealing": "/services/driveway-repairs",
  "/services/paver-sealing": "/services/driveway-sealing",
  "/services/hardscapes": "/services/landscaping",
  "/services/construction": "/services",
  "/services/free-estimate": "/contact",
  "/services/resin-driveways": "/services/resin",
  "/services/patios": "/services/patio-paving",
  "/services/decking": "/services/all-aspects-of-decking",
  "/services/brickwork": "/services/brickwork-and-blockwork",
  "/areas/bath-ba1-7jd": "/areas/bath-ba1",
  "/areas/batheaston-bath-ba1-8eg": "/areas/bath-ba1",
  "/areas/swindon-sn2-1dz": "/areas/swindon-sn3",
  "/areas/trowbridge-ba14": "/",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return Object.entries(REDIRECTS).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};
export default nextConfig;

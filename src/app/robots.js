export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/_next/", "/private/"],
    },
    sitemap: "https://your-law-firm-domain.com/sitemap.xml",
  };
}

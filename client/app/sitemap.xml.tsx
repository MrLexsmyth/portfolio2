import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shittuodunayo.com";

  const routes = [
    "",
    "/about",
    "/portfolio",
    "/contact",
  ];

  const urls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return urls;
}

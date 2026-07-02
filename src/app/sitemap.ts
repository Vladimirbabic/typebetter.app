import type { MetadataRoute } from "next";

const BASE_URL = "https://typebetter.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/changelog", "/api-key-guide"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

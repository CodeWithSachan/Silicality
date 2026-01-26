import { MetadataRoute } from "next";

const lastModified = new Date("2026-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://silicality.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://silicality.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://silicality.com/services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://silicality.com/programs",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://silicality.com/mentorship",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://silicality.com/platform",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://silicality.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://silicality.com/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://silicality.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

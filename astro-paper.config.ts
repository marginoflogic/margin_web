import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://margin-web-dv8.pages.dev/",
    title: "Margin of Logic",
    description: "Mapping technical trade ideas and education on how markets really work",
    author: "Margin of Logic",
 profile: "https://margin-web-dv8.pages.dev/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Bratislava",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      },
    search: "pagefind",
    toc: true,
  },
  socials: [
  { name: "instagram", url: "https://www.instagram.com/margin_of_logic" },
  { name: "facebook", url: "https://www.facebook.com/profile.php?id=61595864072660" },
  { name: "youtube", url: "https://www.youtube.com/@MarginofLogic" },
  { name: "bluesky", url: "https://bsky.app/profile/marginoflogic.bsky.social" },
  { name: "linkedin", url: "https://www.linkedin.com/company/145359630/" },
  { name: "mail", url: "mailto:MarginOfLogic@protonmail.com" },
   ],
  shareLinks: [
   {name: "mail", url: "mailto:MarginOfLogic@protonmail.com"},
  ],
});

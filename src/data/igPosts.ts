export interface IgPost {
  date: string;
  image: string;
  url: string;
  preview: string;
  moreText: string;
}

export const igPosts: IgPost[] = [
  {
    date: "22 Nov, 2026",
    image: "/logo.png", // Neskôr nahradíte cestou k vášmu hook slidu, napr. "/ig/post1.jpg"
    url: "https://www.instagram.com/", // Odkaz na konkrétny Reel
    preview: "Krátky úvodný popis prvého videa, ktorý vidno hneď pod hook slidom...",
    moreText: "Tu sa po kliknutí na 'more' rozbalí zvyšok kompletného textu k tomuto videu.",
  },
  {
    date: "19 Nov, 2026",
    image: "/logo.png",
    url: "https://www.instagram.com/",
    preview: "Krátky úvodný popis druhého videa o mechanike trhu...",
    moreText: "Kompletné vysvetlenie témy z druhého videa po rozbalení textu.",
  },
  {
    date: "15 Nov, 2026",
    image: "/logo.png",
    url: "https://www.instagram.com/",
    preview: "Krátky úvodný popis tretieho videa...",
    moreText: "Zvyšok textu k tretiemu videu. Štvrtý a staršie príspevky sa automaticky skryjú pod tlačidlo nižšie.",
  },
];

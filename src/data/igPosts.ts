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
    image: "/ig/2026-11-22.png",
    url: "https://www.instagram.com/p/DgCn9GgJLHM/",
    preview: "How algorithms find stop-losses below obvious chart lows",
    moreText: `A common occurrence in both forex and cryptocurrency markets is watching price drop just below a major support level, trigger a stop-loss, and immediately reverse in the original direction. This repeated pattern is not random market noise. It is the direct result of how institutional algorithms locate liquidity.

Most retail traders learn the exact same technical analysis concepts. As a standard practice, they place stop-loss orders just below visible swing lows or above swing highs. In financial mechanics, a stop-loss on a long position is simply a pending sell order. When thousands of market participants cluster these orders at the exact same obvious price level, they create a concentrated pool of available volume.

Tier-1 banks and large funds face a specific structural problem: they cannot execute massive buy orders in an empty market without causing extreme slippage. They require an equally massive amount of sellers to act as their counterparty. Quantitative execution algorithms are specifically programmed to identify these obvious chart structures mathematically. Even without direct access to a retail broker's internal book, the statistical probability of heavy order concentration below a clear swing low is nearly 100 percent.

Algorithms push price into these predictable zones to trigger a chain reaction of stop-loss orders. This sudden surge of forced selling provides the exact liquidity the institution needs. The institutional algorithm absorbs these sell orders to fill its own massive buy position at an optimal price.

Once the required volume is collected, the downward pressure ends and the market reverses. Price moves to these levels simply because that is where the necessary volume is located.`,
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

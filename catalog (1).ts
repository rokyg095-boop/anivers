import heroAsset from "@/assets/underworld-hero.webp.asset.json";
import p01 from "@/assets/comics/ch1-p01.jpg.asset.json";
import p02 from "@/assets/comics/ch1-p02.jpg.asset.json";
import p03 from "@/assets/comics/ch1-p03.jpg.asset.json";
import p04 from "@/assets/comics/ch1-p04.jpg.asset.json";
import p05 from "@/assets/comics/ch1-p05.jpg.asset.json";
import p06 from "@/assets/comics/ch1-p06.jpg.asset.json";
import p07 from "@/assets/comics/ch1-p07.jpg.asset.json";
import p08 from "@/assets/comics/ch1-p08.jpg.asset.json";
import p09 from "@/assets/comics/ch1-p09.jpg.asset.json";
import p10 from "@/assets/comics/ch1-p10.jpg.asset.json";
import p11 from "@/assets/comics/ch1-p11.jpg.asset.json";
import p12 from "@/assets/comics/ch1-p12.jpg.asset.json";
import p13 from "@/assets/comics/ch1-p13.jpg.asset.json";
import p14 from "@/assets/comics/ch1-p14.jpg.asset.json";
import p15 from "@/assets/comics/ch1-p15.jpg.asset.json";
import p16 from "@/assets/comics/ch1-p16.jpg.asset.json";
import p17 from "@/assets/comics/ch1-p17.jpg.asset.json";
import h01 from "@/assets/comics/ihypd-ch1-p01.jpg.asset.json";
import h02 from "@/assets/comics/ihypd-ch1-p02.jpg.asset.json";
import h03 from "@/assets/comics/ihypd-ch1-p03.jpg.asset.json";
import h04 from "@/assets/comics/ihypd-ch1-p04.jpg.asset.json";
import h05 from "@/assets/comics/ihypd-ch1-p05.jpg.asset.json";
import h06 from "@/assets/comics/ihypd-ch1-p06.jpg.asset.json";
import h07 from "@/assets/comics/ihypd-ch1-p07.jpg.asset.json";
import h08 from "@/assets/comics/ihypd-ch1-p08.jpg.asset.json";
import h09 from "@/assets/comics/ihypd-ch1-p09.jpg.asset.json";
import h10 from "@/assets/comics/ihypd-ch1-p10.jpg.asset.json";
import h11 from "@/assets/comics/ihypd-ch1-p11.jpg.asset.json";
import h12 from "@/assets/comics/ihypd-ch1-p12.jpg.asset.json";
import h14 from "@/assets/comics/ihypd-ch1-p14.jpg.asset.json";
import h15 from "@/assets/comics/ihypd-ch1-p15.jpg.asset.json";
import h16 from "@/assets/comics/ihypd-ch1-p16.jpg.asset.json";
import h17 from "@/assets/comics/ihypd-ch1-p17.jpg.asset.json";
import h18 from "@/assets/comics/ihypd-ch1-p18.jpg.asset.json";
import h19 from "@/assets/comics/ihypd-ch1-p19.jpg.asset.json";
import ep1 from "@/assets/episode-1.jpg";
import ep2 from "@/assets/episode-2.jpg";
import ep3 from "@/assets/episode-3.jpg";

export const heroImage = heroAsset.url;

export type Chapter = {
  id: string;
  seriesId: string;
  number: number;
  title: string;
  releasedAt: string;
  pages: string[];
};

export type ComicSeries = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  genres: string[];
  /** Optional audience badge shown on the cover, e.g. "للراشدين". */
  ageRating?: string;
};

export type Episode = {
  id: string;
  seriesId: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  releasedAt: string;
  thumbnail: string;
  videoUrl: string;
};

export type DubbedSeries = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

export const comicSeries: ComicSeries[] = [
  {
    id: "adventure-time",
    title: "وقت المغامرة",
    subtitle: "مع فين وجيك",
    description:
      "انطلق مع فين البطل وصديقه الكلب السحري جيك في مغامرات مجنونة عبر أرض أوو، مترجمة بالكامل إلى العربية.",
    cover: p01.url,
    genres: ["مغامرة", "كوميديا", "خيال"],
  },
  {
    id: "i-hate-you-please-die",
    title: "أكرهك، أرجوك مت!",
    subtitle: "غاريت غان وماليا إيوارت · ترجمة إنفنتلز",
    description:
      "قصة رعب وكوميديا سوداء مستوحاة من طفولة مؤلفها: فتى صغير يجد نفسه في مواجهة كائن شيطاني ضخم بابتسامة لا تُنسى.",
    cover: h01.url,
    genres: ["رعب", "كوميديا سوداء", "خيال"],
    ageRating: "للراشدين",
  },
];

export const chapters: Chapter[] = [
  {
    id: "adventure-time-1",
    seriesId: "adventure-time",
    number: 1,
    title: "العدد الأول",
    releasedAt: "2026-11-08",
    pages: [
      p01, p02, p03, p04, p05, p06, p07, p08, p09,
      p10, p11, p12, p13, p14, p15, p16, p17,
    ].map((p) => p.url),
  },
  {
    id: "i-hate-you-please-die-1",
    seriesId: "i-hate-you-please-die",
    number: 1,
    title: "الكتاب الأول",
    releasedAt: "2026-11-09",
    // Page 13 of the original book was not provided; pages continue 12 → 14.
    pages: [
      h01, h02, h03, h04, h05, h06, h07, h08, h09,
      h10, h11, h12, h14, h15, h16, h17, h18, h19,
    ].map((p) => p.url),
  },
];

// Sample video stands in until real dubbed episode files are provided.
const SAMPLE_VIDEO = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export const dubbedSeries: DubbedSeries[] = [
  {
    id: "underworld-troublemakers",
    title: "مشاغبو العالم السفلي",
    description: "مغامرات صاخبة تحت الأرض بدبلجة عربية مميزة.",
    cover: heroAsset.url,
  },
];

export const episodes: Episode[] = [
  {
    id: "underworld-1",
    seriesId: "underworld-troublemakers",
    number: 1,
    title: "كهف البلّورات",
    description: "يتبع الصديقان ضوءاً غامضاً إلى كهف تلمع جدرانه بالبلّورات الزرقاء.",
    duration: "11:24",
    releasedAt: "2026-11-01",
    thumbnail: ep1,
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "underworld-2",
    seriesId: "underworld-troublemakers",
    number: 2,
    title: "نهر الحمم",
    description: "طوف خشبي، ونهر من الحمم، وجمهور من العفاريت الصغار يهتف بلا توقف.",
    duration: "11:02",
    releasedAt: "2026-11-05",
    thumbnail: ep2,
    videoUrl: SAMPLE_VIDEO,
  },
  {
    id: "underworld-3",
    seriesId: "underworld-troublemakers",
    number: 3,
    title: "قلعة الجماجم الحلوة",
    description: "قلعة مصنوعة من الحلوى تخفي سراً كبيراً في قلب العالم السفلي.",
    duration: "11:40",
    releasedAt: "2026-11-08",
    thumbnail: ep3,
    videoUrl: SAMPLE_VIDEO,
  },
];

const byNewest = <T extends { releasedAt: string }>(a: T, b: T) =>
  b.releasedAt.localeCompare(a.releasedAt);

export const getSeries = (id: string) => comicSeries.find((s) => s.id === id);
export const getChapter = (id: string) => chapters.find((c) => c.id === id);
export const getEpisode = (id: string) => episodes.find((e) => e.id === id);
export const getDubbedSeries = (id: string) => dubbedSeries.find((s) => s.id === id);

/** Chapters of one series only, in reading order (1, 2, 3…). */
export const seriesChapters = (seriesId: string) =>
  chapters.filter((c) => c.seriesId === seriesId).sort((a, b) => a.number - b.number);

export const latestChapters = (limit = 6) => [...chapters].sort(byNewest).slice(0, limit);
export const latestEpisodes = (limit = 6) => [...episodes].sort(byNewest).slice(0, limit);

export const seriesEpisodes = (seriesId: string) =>
  episodes.filter((e) => e.seriesId === seriesId).sort((a, b) => a.number - b.number);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("ar", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso),
  );

/** Folds Arabic spelling variants (hamza forms, ta marbuta, alef maqsura, diacritics) and case. */
export const normalizeSearch = (text: string) =>
  text
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ؤئ]/g, "ء")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

export type SearchResults = {
  series: ComicSeries[];
  chapters: Chapter[];
  episodes: Episode[];
};

/** Title search across comic series, chapters and dubbed episodes. */
export const searchCatalog = (query: string, limit = 6): SearchResults => {
  const q = normalizeSearch(query);
  if (!q) return { series: [], chapters: [], episodes: [] };
  const terms = q.split(" ");
  const hit = (...fields: (string | undefined)[]) => {
    const hay = normalizeSearch(fields.filter(Boolean).join(" "));
    return terms.every((t) => hay.includes(t));
  };
  return {
    series: comicSeries.filter((s) => hit(s.title, s.subtitle)).slice(0, limit),
    chapters: chapters
      .filter((c) => hit(getSeries(c.seriesId)?.title, c.title))
      .slice(0, limit),
    episodes: episodes
      .filter((e) => hit(e.title, getDubbedSeries(e.seriesId)?.title))
      .slice(0, limit),
  };
};

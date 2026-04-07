import { createFileRoute, notFound } from "@tanstack/react-router";
import LandingPage from "@/app/(public)/[locale]/page";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import frMessages from "@/i18n/locales/fr.json";

const SEO_BASE_URL = "https://magicv.art";

function resolveLocale(rawLocale: string): Locale {
  if (locales.includes(rawLocale as Locale)) {
    return rawLocale as Locale;
  }
  return defaultLocale;
}

function getLocaleSeo() {
  const messages = frMessages;
  const title = `${messages.common.title} - ${messages.common.subtitle}`;
  const description = messages.common.description;
  const canonical = `${SEO_BASE_URL}/fr`;

  return {
    title,
    description,
    localeTag: "fr_FR",
    canonical,
  };
}

export const Route = createFileRoute("/$locale")({
  head: () => {
    const seo = getLocaleSeo();

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "robots", content: "index,follow" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Magic Resume" },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:locale", content: seo.localeTag },
        { property: "og:url", content: seo.canonical },
        { property: "og:image", content: `${SEO_BASE_URL}/web-shot.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: `${SEO_BASE_URL}/web-shot.png` }
      ],
      links: [
        { rel: "canonical", href: seo.canonical },
        { rel: "alternate", hrefLang: "fr", href: seo.canonical },
        { rel: "alternate", hrefLang: "x-default", href: `${SEO_BASE_URL}/fr` }
      ]
    };
  },
  component: LocaleLandingPage
});

function LocaleLandingPage() {
  const { locale } = Route.useParams();

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return <LandingPage />;
}

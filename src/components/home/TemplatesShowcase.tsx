import { useTranslations } from "@/i18n/compat/client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedFeature from "./client/AnimatedFeature";
import GoDashboard from "./GoDashboard";
import { DEFAULT_TEMPLATES } from "@/config";

type TemplateStyle =
  | "classic"
  | "modern"
  | "left-right"
  | "timeline"
  | "minimalist"
  | "elegant"
  | "creative"
  | "editorial"
  | "notion"
  | "vercel"
  | "neobrutalist"
  | "gradient"
  | "terminal"
  | "magazine"
  | "compact"
  | "card"
  | "sidebar"
  | "swiss";

const TEMPLATE_TAG_KEYS: Record<TemplateStyle, keyof typeof TAG_LABELS> = {
  classic: "classic",
  modern: "modern",
  "left-right": "modern",
  timeline: "modern",
  minimalist: "minimal",
  elegant: "classic",
  creative: "creative",
  editorial: "creative",
  notion: "minimal",
  vercel: "tech",
  neobrutalist: "creative",
  gradient: "modern",
  terminal: "tech",
  magazine: "creative",
  compact: "minimal",
  card: "modern",
  sidebar: "modern",
  swiss: "minimal",
};

const TAG_LABELS = {
  modern: "modern",
  minimal: "minimal",
  creative: "creative",
  tech: "tech",
  classic: "classic",
};

const TAG_COLORS: Record<string, string> = {
  modern: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  minimal: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
  creative: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  tech: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  classic: "bg-amber-500/10 text-amber-700 dark:text-amber-500",
};

// Mini visual preview of each template style using pure CSS
const TemplatePreviewCard = ({
  templateId,
  name,
  accentColor,
}: {
  templateId: string;
  name: string;
  accentColor: string;
}) => {
  const renderPreview = () => {
    switch (templateId) {
      case "vercel":
        return (
          <div className="absolute inset-0 bg-black p-4 flex flex-col gap-2">
            <div className="h-3 w-20 rounded bg-white/90" />
            <div className="h-1.5 w-14 rounded bg-white/40" />
            <div className="mt-2 h-px w-full bg-white/10" />
            <div className="h-1 w-full rounded bg-white/20" />
            <div className="h-1 w-3/4 rounded bg-white/20" />
            <div className="h-1 w-2/3 rounded bg-white/20" />
            <div className="mt-auto flex gap-1">
              <div className="h-1.5 w-6 rounded bg-white/60" />
              <div className="h-1.5 w-4 rounded bg-white/30" />
            </div>
          </div>
        );

      case "neobrutalist":
        return (
          <div className="absolute inset-0 bg-yellow-100 p-3 flex flex-col gap-2">
            <div
              className="h-4 w-20 border-2 border-black bg-white"
              style={{ boxShadow: "2px 2px 0 0 #000" }}
            />
            <div className="h-2 w-14 bg-black" />
            <div
              className="mt-1 p-1.5 bg-pink-300 border-2 border-black"
              style={{ boxShadow: "2px 2px 0 0 #000" }}
            >
              <div className="h-1 w-full bg-black/80" />
              <div className="mt-1 h-1 w-3/4 bg-black/80" />
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="absolute inset-0 bg-zinc-900 p-3 flex flex-col gap-1.5">
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            </div>
            <div className="mt-1 h-1 w-2/3 rounded bg-green-400/70 font-mono" />
            <div className="h-1 w-1/2 rounded bg-emerald-400/40" />
            <div className="h-px w-full bg-zinc-700 my-1" />
            <div className="h-1 w-full rounded bg-zinc-500/40" />
            <div className="h-1 w-3/4 rounded bg-zinc-500/40" />
          </div>
        );

      case "gradient":
        return (
          <div
            className="absolute inset-0 p-3 flex flex-col gap-1.5"
            style={{
              background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}10 60%, white)`,
            }}
          >
            <div
              className="h-3 w-20 rounded"
              style={{ backgroundColor: accentColor, opacity: 0.9 }}
            />
            <div className="h-1.5 w-12 rounded bg-foreground/30" />
            <div className="mt-2 h-1 w-full rounded bg-foreground/15" />
            <div className="h-1 w-3/4 rounded bg-foreground/15" />
            <div className="h-1 w-2/3 rounded bg-foreground/15" />
          </div>
        );

      case "notion":
        return (
          <div className="absolute inset-0 bg-white p-3 flex flex-col gap-1.5">
            <div
              className="h-1 w-full -mx-3"
              style={{ backgroundColor: accentColor }}
            />
            <div className="h-3 w-20 rounded bg-zinc-800 mt-2" />
            <div className="h-1.5 w-14 rounded bg-zinc-400" />
            <div className="h-px w-full bg-zinc-200 my-1" />
            <div className="h-1 w-full rounded bg-zinc-300" />
            <div className="h-1 w-3/4 rounded bg-zinc-300" />
          </div>
        );

      case "sidebar":
        return (
          <div className="absolute inset-0 flex bg-white">
            <div
              className="w-[35%] p-2 flex flex-col gap-1.5"
              style={{ backgroundColor: accentColor }}
            >
              <div className="h-2 w-full rounded bg-white/80" />
              <div className="h-1 w-3/4 rounded bg-white/50" />
              <div className="mt-2 h-1 w-full rounded bg-white/40" />
              <div className="h-1 w-2/3 rounded bg-white/40" />
            </div>
            <div className="flex-1 p-2 flex flex-col gap-1.5">
              <div className="h-2 w-full rounded bg-zinc-800" />
              <div className="h-1 w-full rounded bg-zinc-300" />
              <div className="h-1 w-5/6 rounded bg-zinc-300" />
              <div className="h-1 w-3/4 rounded bg-zinc-300" />
            </div>
          </div>
        );

      case "swiss":
        return (
          <div className="absolute inset-0 bg-white p-3 flex flex-col gap-1.5">
            <div className="flex items-baseline gap-2">
              <div className="h-3 w-3 bg-red-600" />
              <div className="h-3 flex-1 bg-zinc-900" />
            </div>
            <div className="h-1.5 w-2/3 bg-zinc-400" />
            <div className="mt-2 grid grid-cols-3 gap-1">
              <div className="h-1 col-span-1 bg-zinc-700" />
              <div className="h-1 col-span-2 bg-zinc-300" />
              <div className="h-1 col-span-1 bg-zinc-700" />
              <div className="h-1 col-span-2 bg-zinc-300" />
            </div>
          </div>
        );

      case "card":
        return (
          <div className="absolute inset-0 bg-zinc-100 p-2 flex flex-col gap-1.5">
            <div className="rounded-md bg-white p-2 shadow-sm flex flex-col gap-1">
              <div className="h-2 w-2/3 rounded bg-zinc-800" />
              <div className="h-1 w-1/2 rounded bg-zinc-400" />
            </div>
            <div className="rounded-md bg-white p-2 shadow-sm flex flex-col gap-1">
              <div className="h-1 w-3/4 rounded bg-zinc-300" />
              <div className="h-1 w-2/3 rounded bg-zinc-300" />
            </div>
          </div>
        );

      case "magazine":
        return (
          <div className="absolute inset-0 bg-white p-3 flex flex-col gap-1">
            <div className="text-[6px] font-bold tracking-widest text-zinc-400">
              MAGAZINE
            </div>
            <div className="h-1 w-full bg-zinc-900" />
            <div className="h-4 w-3/4 mt-1" style={{ backgroundColor: accentColor }} />
            <div className="grid grid-cols-2 gap-1 mt-2">
              <div className="space-y-0.5">
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 w-2/3 bg-zinc-300" />
              </div>
              <div className="space-y-0.5">
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 w-3/4 bg-zinc-300" />
              </div>
            </div>
          </div>
        );

      case "compact":
        return (
          <div className="absolute inset-0 bg-white p-2 flex flex-col gap-0.5">
            <div className="h-2 w-2/3 rounded bg-zinc-900" />
            <div className="h-1 w-1/2 rounded bg-zinc-400" />
            <div className="h-px w-full bg-zinc-300 my-1" />
            <div className="grid grid-cols-2 gap-1 flex-1">
              <div className="space-y-0.5">
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 w-3/4 bg-zinc-300" />
              </div>
              <div className="space-y-0.5">
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 bg-zinc-300" />
                <div className="h-1 w-2/3 bg-zinc-300" />
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="absolute inset-0 bg-white p-3 flex flex-col gap-1.5">
            <div className="h-3 w-2/3 rounded bg-zinc-900" />
            <div className="flex gap-2 mt-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <div className="w-px flex-1 bg-zinc-300" />
                <div className="h-2 w-2 rounded-full bg-zinc-300" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="h-1 w-3/4 rounded bg-zinc-700" />
                <div className="h-1 w-1/2 rounded bg-zinc-300" />
                <div className="h-1 w-2/3 rounded bg-zinc-300 mt-3" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 bg-white p-3 flex flex-col gap-1.5">
            <div className="h-3 w-20 rounded bg-zinc-900" />
            <div className="h-1.5 w-14 rounded bg-zinc-400" />
            <div
              className="h-px w-full mt-1"
              style={{ backgroundColor: accentColor }}
            />
            <div className="h-1 w-full rounded bg-zinc-300" />
            <div className="h-1 w-3/4 rounded bg-zinc-300" />
            <div className="h-1 w-2/3 rounded bg-zinc-300" />
            <div className="mt-2 h-1 w-1/2 rounded bg-zinc-700" />
            <div className="h-1 w-3/4 rounded bg-zinc-300" />
          </div>
        );
    }
  };

  return (
    <div className="group relative">
      <div className="aspect-[210/297] relative overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-primary/40">
        {renderPreview()}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
      </div>
      <div className="mt-3 text-center">
        <div className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
          {name}
        </div>
      </div>
    </div>
  );
};

const toTemplateNameKey = (templateId: string) =>
  templateId === "left-right" ? "leftRight" : templateId;

export default function TemplatesShowcase() {
  const t = useTranslations("home.templatesShowcase");
  const tDashboard = useTranslations();

  return (
    <section className="py-24 md:py-32 bg-secondary/30 dark:bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedFeature>
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t("badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-foreground/90 mb-6 text-balance">
              {t("title")}
            </h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed text-pretty">
              {t("subtitle")}
            </p>
          </div>
        </AnimatedFeature>

        <AnimatedFeature delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6 mb-16">
            {DEFAULT_TEMPLATES.map((template) => {
              const tagKey = TEMPLATE_TAG_KEYS[template.id as TemplateStyle] || "modern";
              const nameKey = toTemplateNameKey(template.id);
              const translatedName = tDashboard(`dashboard.templates.${nameKey}.name`);
              return (
                <div key={template.id} className="relative">
                  <span
                    className={`absolute -top-2 -right-2 z-10 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tagKey]}`}
                  >
                    {t(`tags.${tagKey}`)}
                  </span>
                  <TemplatePreviewCard
                    templateId={template.id}
                    name={translatedName}
                    accentColor={template.colorScheme.primary}
                  />
                </div>
              );
            })}
          </div>
        </AnimatedFeature>

        <AnimatedFeature delay={0.3}>
          <div className="flex justify-center">
            <GoDashboard type="templates">
              <Button
                size="lg"
                className="rounded-2xl h-14 px-10 text-base font-medium shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all group"
              >
                {t("cta")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GoDashboard>
          </div>
        </AnimatedFeature>
      </div>
    </section>
  );
}

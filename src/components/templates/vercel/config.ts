import { ResumeTemplate } from "@/types/template";

export const vercelConfig: ResumeTemplate = {
  id: "vercel",
  name: "Vercel",
  description: "Design moderne avec fond sombre et accents vifs",
  thumbnail: "vercel",
  layout: "vercel",
  colorScheme: {
    primary: "#ffffff",
    secondary: "#888888",
    background: "#000000",
    text: "#ededed",
  },
  spacing: {
    sectionGap: 24,
    itemGap: 16,
    contentPadding: 48,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

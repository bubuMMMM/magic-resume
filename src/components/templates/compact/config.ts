import { ResumeTemplate } from "@/types/template";

export const compactConfig: ResumeTemplate = {
  id: "compact",
  name: "Compact",
  description: "Mise en page dense pour maximiser les informations",
  thumbnail: "compact",
  layout: "compact",
  colorScheme: {
    primary: "#1f2937",
    secondary: "#6b7280",
    background: "#ffffff",
    text: "#111827",
  },
  spacing: {
    sectionGap: 12,
    itemGap: 8,
    contentPadding: 24,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

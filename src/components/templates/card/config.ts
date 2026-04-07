import { ResumeTemplate } from "@/types/template";

export const cardConfig: ResumeTemplate = {
  id: "card",
  name: "Card",
  description: "Sections en cartes avec ombres douces",
  thumbnail: "card",
  layout: "card",
  colorScheme: {
    primary: "#3b82f6",
    secondary: "#64748b",
    background: "#f1f5f9",
    text: "#1e293b",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 14,
    contentPadding: 32,
  },
  basic: {
    layout: "center",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

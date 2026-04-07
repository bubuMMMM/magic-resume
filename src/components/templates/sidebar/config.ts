import { ResumeTemplate } from "@/types/template";

export const sidebarConfig: ResumeTemplate = {
  id: "sidebar",
  name: "Sidebar",
  description: "Barre laterale coloree avec contenu principal",
  thumbnail: "sidebar",
  layout: "sidebar",
  colorScheme: {
    primary: "#0ea5e9",
    secondary: "#64748b",
    background: "#ffffff",
    text: "#0f172a",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 14,
    contentPadding: 32,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

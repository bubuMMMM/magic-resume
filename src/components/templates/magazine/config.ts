import { ResumeTemplate } from "@/types/template";

export const magazineConfig: ResumeTemplate = {
  id: "magazine",
  name: "Magazine",
  description: "Mise en page editoriale style magazine",
  thumbnail: "magazine",
  layout: "magazine",
  colorScheme: {
    primary: "#0f172a",
    secondary: "#64748b",
    background: "#f8fafc",
    text: "#0f172a",
  },
  spacing: {
    sectionGap: 28,
    itemGap: 16,
    contentPadding: 48,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

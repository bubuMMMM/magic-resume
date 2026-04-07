import { ResumeTemplate } from "@/types/template";

export const notionConfig: ResumeTemplate = {
  id: "notion",
  name: "Notion",
  description: "Style epure inspire de Notion avec bordures subtiles",
  thumbnail: "notion",
  layout: "notion",
  colorScheme: {
    primary: "#37352f",
    secondary: "#787774",
    background: "#ffffff",
    text: "#37352f",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 12,
    contentPadding: 40,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

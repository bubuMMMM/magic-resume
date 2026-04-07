import { ResumeTemplate } from "@/types/template";

export const terminalConfig: ResumeTemplate = {
  id: "terminal",
  name: "Terminal",
  description: "Esthetique developpeur avec style terminal",
  thumbnail: "terminal",
  layout: "terminal",
  colorScheme: {
    primary: "#22c55e",
    secondary: "#4ade80",
    background: "#0a0a0a",
    text: "#d4d4d4",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 12,
    contentPadding: 32,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

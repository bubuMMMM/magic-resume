import { ResumeTemplate } from "@/types/template";

export const swissConfig: ResumeTemplate = {
  id: "swiss",
  name: "Swiss",
  description: "Style typographique suisse international",
  thumbnail: "swiss",
  layout: "swiss",
  colorScheme: {
    primary: "#dc2626",
    secondary: "#525252",
    background: "#ffffff",
    text: "#171717",
  },
  spacing: {
    sectionGap: 32,
    itemGap: 16,
    contentPadding: 48,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

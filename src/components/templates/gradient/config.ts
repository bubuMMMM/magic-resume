import { ResumeTemplate } from "@/types/template";

export const gradientConfig: ResumeTemplate = {
  id: "gradient",
  name: "Gradient",
  description: "Arriere-plan degrade doux et moderne",
  thumbnail: "gradient",
  layout: "gradient",
  colorScheme: {
    primary: "#6366f1",
    secondary: "#818cf8",
    background: "#ffffff",
    text: "#1e1b4b",
  },
  spacing: {
    sectionGap: 20,
    itemGap: 14,
    contentPadding: 40,
  },
  basic: {
    layout: "center",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

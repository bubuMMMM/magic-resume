import { ResumeTemplate } from "@/types/template";

export const neobrutalistConfig: ResumeTemplate = {
  id: "neobrutalist",
  name: "Neobrutalist",
  description: "Style audacieux avec bordures epaisses et ombres marquees",
  thumbnail: "neobrutalist",
  layout: "neobrutalist",
  colorScheme: {
    primary: "#000000",
    secondary: "#525252",
    background: "#fef3c7",
    text: "#000000",
  },
  spacing: {
    sectionGap: 24,
    itemGap: 16,
    contentPadding: 32,
  },
  basic: {
    layout: "left",
  },
  availableSections: ["skills", "experience", "projects", "education", "selfEvaluation", "certificates"],
};

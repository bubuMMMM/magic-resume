import React from "react";
import { ResumeData } from "@/types/resume";
import { ResumeTemplate } from "@/types/template";
import BaseInfo from "../classic/sections/BaseInfo";
import ExperienceSection from "../classic/sections/ExperienceSection";
import EducationSection from "../modern/sections/EducationSection";
import ProjectSection from "../classic/sections/ProjectSection";
import SkillSection from "../classic/sections/SkillSection";
import SelfEvaluationSection from "../classic/sections/SelfEvaluationSection";
import CustomSection from "../classic/sections/CustomSection";
import SectionTitle from "../classic/sections/SectionTitle";
import SectionWrapper from "../shared/SectionWrapper";
import CertificatesSection from "../shared/CertificatesSection";

interface SidebarTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const SidebarTemplate: React.FC<SidebarTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const themeColor = data.globalSettings?.themeColor || "#0ea5e9";

  const renderSection = (sectionId: string, variant?: "sidebar") => {
    switch (sectionId) {
      case "basic":
        return (
          <BaseInfo
            basic={data.basic}
            globalSettings={data.globalSettings}
            template={template}
          />
        );
      case "experience":
        return (
          <ExperienceSection
            experiences={data.experience}
            globalSettings={data.globalSettings}
          />
        );
      case "education":
        return (
          <EducationSection
            education={data.education}
            globalSettings={data.globalSettings}
            variant={variant}
          />
        );
      case "skills":
        return (
          <SkillSection
            skill={data.skillContent}
            globalSettings={data.globalSettings}
          />
        );
      case "projects":
        return (
          <ProjectSection
            projects={data.projects}
            globalSettings={data.globalSettings}
          />
        );
      case "certificates":
        return (
          <SectionWrapper
            sectionId="certificates"
            style={{ marginTop: `${data.globalSettings?.sectionSpacing || 24}px` }}
          >
            <SectionTitle type="certificates" globalSettings={data.globalSettings} />
            <CertificatesSection certificates={data.certificates} />
          </SectionWrapper>
        );
      case "selfEvaluation":
        return (
          <SelfEvaluationSection
            content={data.selfEvaluationContent}
            globalSettings={data.globalSettings}
          />
        );
      default:
        if (sectionId in data.customData) {
          const sectionTitle =
            data.menuSections.find((s) => s.id === sectionId)?.title || sectionId;
          return (
            <CustomSection
              title={sectionTitle}
              sectionId={sectionId}
              items={data.customData[sectionId]}
              globalSettings={data.globalSettings}
            />
          );
        }
        return null;
    }
  };

  const basicSection = enabledSections.find((s) => s.id === "basic");
  const educationSection = enabledSections.find((s) => s.id === "education");
  const skillsSection = enabledSections.find((s) => s.id === "skills");
  const mainSections = enabledSections.filter(
    (s) => s.id !== "basic" && s.id !== "education" && s.id !== "skills"
  );

  return (
    <table
      className="w-full border-collapse"
      style={{
        height: `calc(297mm - ${(data.globalSettings?.pagePadding || 32) * 2}px)`,
        tableLayout: "fixed",
      }}
    >
      <tbody>
        <tr>
          {/* Sidebar */}
          <td
            className="align-top p-6"
            style={{
              width: "35%",
              backgroundColor: themeColor,
              color: "#ffffff",
            }}
          >
            {basicSection && (
              <div className="mb-6">{renderSection(basicSection.id)}</div>
            )}
            {educationSection && (
              <div className="mb-6">
                {renderSection(educationSection.id, "sidebar")}
              </div>
            )}
            {skillsSection && (
              <div>{renderSection(skillsSection.id)}</div>
            )}
          </td>
          {/* Main content */}
          <td
            className="align-top p-6"
            style={{
              width: "65%",
              backgroundColor: colorScheme.background,
              color: colorScheme.text,
            }}
          >
            {mainSections.map((section) => (
              <div key={section.id}>{renderSection(section.id)}</div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SidebarTemplate;

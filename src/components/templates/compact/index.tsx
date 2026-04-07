import React from "react";
import { ResumeData } from "@/types/resume";
import { ResumeTemplate } from "@/types/template";
import BaseInfo from "../classic/sections/BaseInfo";
import ExperienceSection from "../classic/sections/ExperienceSection";
import EducationSection from "../classic/sections/EducationSection";
import ProjectSection from "../classic/sections/ProjectSection";
import SkillSection from "../classic/sections/SkillSection";
import SelfEvaluationSection from "../classic/sections/SelfEvaluationSection";
import CustomSection from "../classic/sections/CustomSection";
import SectionTitle from "../classic/sections/SectionTitle";
import SectionWrapper from "../shared/SectionWrapper";
import CertificatesSection from "../shared/CertificatesSection";

interface CompactTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const CompactTemplate: React.FC<CompactTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const themeColor = data.globalSettings?.themeColor || "#1f2937";

  const renderSection = (sectionId: string) => {
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
            style={{ marginTop: `${data.globalSettings?.sectionSpacing || 12}px` }}
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
  const otherSections = enabledSections.filter((s) => s.id !== "basic");

  // Split sections into two columns for compact display
  const midpoint = Math.ceil(otherSections.length / 2);
  const leftSections = otherSections.slice(0, midpoint);
  const rightSections = otherSections.slice(midpoint);

  return (
    <div
      className="flex flex-col w-full min-h-screen text-sm"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
      }}
    >
      {/* Compact header */}
      {basicSection && (
        <div
          className="px-4 py-3 border-b-2"
          style={{ borderColor: themeColor }}
        >
          {renderSection(basicSection.id)}
        </div>
      )}

      {/* Two-column compact layout */}
      <div className="flex gap-4 p-4">
        <div className="flex-1 space-y-3">
          {leftSections.map((section) => (
            <div key={section.id} className="pb-2 border-b border-gray-200 last:border-0">
              {renderSection(section.id)}
            </div>
          ))}
        </div>
        <div
          className="w-px self-stretch"
          style={{ backgroundColor: `${themeColor}20` }}
        />
        <div className="flex-1 space-y-3">
          {rightSections.map((section) => (
            <div key={section.id} className="pb-2 border-b border-gray-200 last:border-0">
              {renderSection(section.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompactTemplate;

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

interface SwissTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const SwissTemplate: React.FC<SwissTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const themeColor = data.globalSettings?.themeColor || "#dc2626";

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

  return (
    <div
      className="flex flex-col w-full min-h-screen"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Swiss grid system - asymmetric layout */}
      <div className="flex">
        {/* Left margin with accent */}
        <div
          className="w-4 min-h-screen"
          style={{ backgroundColor: themeColor }}
        />
        
        <div className="flex-1 p-10">
          {/* Large typographic header */}
          <div className="mb-12">
            <div
              className="text-[80px] font-bold leading-none tracking-tighter"
              style={{ color: themeColor }}
            >
              CV
            </div>
          </div>

          {/* Content with strong grid */}
          {enabledSections.map((section, index) => (
            <div
              key={section.id}
              className="mb-8 last:mb-0"
            >
              {/* Section number in Swiss style */}
              <div className="flex items-start gap-6 mb-4">
                <div
                  className="text-2xl font-bold w-8"
                  style={{ color: themeColor }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 border-t-2 pt-4" style={{ borderColor: colorScheme.text }}>
                  {renderSection(section.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwissTemplate;

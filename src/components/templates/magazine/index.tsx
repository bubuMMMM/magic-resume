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

interface MagazineTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const MagazineTemplate: React.FC<MagazineTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const themeColor = data.globalSettings?.themeColor || "#0f172a";

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

  const basicSection = enabledSections.find((s) => s.id === "basic");
  const otherSections = enabledSections.filter((s) => s.id !== "basic");

  return (
    <div
      className="flex flex-col w-full min-h-screen"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
      }}
    >
      {/* Editorial masthead */}
      <div
        className="w-full py-2 text-center text-xs tracking-[0.3em] uppercase"
        style={{ backgroundColor: themeColor, color: "#ffffff" }}
      >
        Curriculum Vitae
      </div>
      
      {/* Magazine-style header */}
      {basicSection && (
        <div className="px-12 pt-10 pb-8 border-b-4" style={{ borderColor: themeColor }}>
          {renderSection(basicSection.id)}
        </div>
      )}

      {/* Two-column magazine layout for content */}
      <div className="px-12 py-8">
        <div className="grid grid-cols-1 gap-8">
          {otherSections.map((section, index) => (
            <div
              key={section.id}
              className="relative"
            >
              {/* Drop cap style section indicator */}
              <div
                className="absolute -left-6 top-0 w-1 h-full"
                style={{ backgroundColor: index % 2 === 0 ? themeColor : `${themeColor}60` }}
              />
              {renderSection(section.id)}
            </div>
          ))}
        </div>
      </div>

      {/* Magazine footer */}
      <div
        className="mt-auto py-3 text-center text-xs"
        style={{ backgroundColor: colorScheme.background, borderTop: `1px solid ${themeColor}20` }}
      >
        <span style={{ color: themeColor }}>---</span>
      </div>
    </div>
  );
};

export default MagazineTemplate;

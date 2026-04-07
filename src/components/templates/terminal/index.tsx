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

interface TerminalTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const TerminalTemplate: React.FC<TerminalTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const themeColor = data.globalSettings?.themeColor || "#22c55e";

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
        fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace",
      }}
    >
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        <span className="ml-4 text-xs text-[#666]">resume.sh</span>
      </div>
      <div className="p-6">
        {/* Command prompt style */}
        <div className="mb-4 text-sm" style={{ color: themeColor }}>
          <span className="opacity-70">$</span> cat resume.json
        </div>
        {enabledSections.map((section, index) => (
          <div
            key={section.id}
            className="mb-4 last:mb-0 pl-4"
            style={{ borderLeft: `2px solid ${themeColor}40` }}
          >
            <div className="text-xs mb-2 opacity-50" style={{ color: themeColor }}>
              {"// "}{section.title || section.id}
            </div>
            {renderSection(section.id)}
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="mt-4 flex items-center gap-1">
          <span style={{ color: themeColor }}>$</span>
          <span className="w-2 h-4 animate-pulse" style={{ backgroundColor: themeColor }} />
        </div>
      </div>
    </div>
  );
};

export default TerminalTemplate;

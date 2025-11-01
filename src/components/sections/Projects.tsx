import type { SkillItem } from "@/types";
import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import {
  SKILLS,
  REACT_SKILL,
  TS_SKILL,
  TAILWINDCSS_SKILL,
  VITEST_SKILL,
  VITE_SKILL,
} from "../utility/skills/constants";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import type { ReactNode } from "react";

type BulletPart = string | { label: string; url: string };

export type ProjectConfig = {
  key: string;
  title: string;
  subtitle?: string;
  year?: string;
  logo: ReactNode;
  bullets: BulletPart[][]; // each bullet is an array of parts (strings or link objects)
  skills?: string[];
  sourceUrl?: string;
};

export const PROJECTS: ProjectConfig[] = [
  {
    key: "wyd",
    title: "What you doing?",
    subtitle: "Google Chrome Extension",
    year: "2024",
    logo: <div className="text-primary font-bold text-2xl">WYD</div>,
    bullets: [
      [
        "A Chrome extension designed to help users reflect on their daily browsing and bookmark habits by providing clear and insightful metrics in an aesthetic dashboard",
      ],
      [
        "Exciting and insightful visualisations supported by ",
        { label: "shadcn", url: "https://ui.shadcn.com/" },
        " and ",
        { label: "TailwindCSS", url: "https://tailwindcss.com/" },
      ],
      [
        "Network response caching for seamless UX and refresh using ",
        { label: "Tanstack-Query", url: "https://tanstack.com/query" },
      ],
      [
        "Renders 10,000+ row tables nearly instantly using virtualisation using ",
        {
          label: "react-window",
          url: "https://github.com/bvaughn/react-window",
        },
      ],
      [
        "Comprehensive test suite built using ",
        { label: "Vitest", url: "https://vitest.dev/" },
      ],
    ],
    skills: [
      TS_SKILL,
      REACT_SKILL,
      VITE_SKILL,
      VITEST_SKILL,
      TAILWINDCSS_SKILL,
    ],
    sourceUrl: "https://github.com/LukeHenningSmith/wyd",
  },
];

function renderBullet(parts: BulletPart[], idx: number) {
  return (
    <li key={idx}>
      {parts.map((p, i) => {
        if (typeof p === "string") return <span key={i}>{p}</span>;
        return (
          <Button
            key={i}
            variant={"link"}
            size={null}
            className="cursor-pointer"
            onClick={() => {
              const newWindow = window.open(p.url, "_blank");
              if (newWindow) newWindow.opener = null;
            }}
          >
            {p.label}
          </Button>
        );
      })}
    </li>
  );
}

export function Projects({ animationOffset }: { animationOffset?: number }) {
  const renderProject = (project: ProjectConfig) => {
    const skills: SkillItem[] = (project.skills || []).map(
      (s: any) => SKILLS[s as keyof typeof SKILLS]
    );

    return (
      <FadeUp key={project.key} delay={animationOffset}>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <div className="flex gap-2">
            <div className="flex mx-2 w-[50px] items-center justify-center">
              {project.logo}
            </div>

            <div className="flex-1">
              <div className="flex flex-col">
                <div className="text-primary font-bold">{project.title}</div>
                {project.subtitle && (
                  <div className="text-primary">{project.subtitle}</div>
                )}
                {project.year && <div>{project.year}</div>}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pl-18">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              {project.bullets.map((b, i) => renderBullet(b, i))}
            </ul>

            <div className="my-2">
              <SkillsContainer skills={skills} />
            </div>

            {project.sourceUrl ? (
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  title="View source code on GitHub"
                  className="cursor-pointer text-muted-foreground bg-transparent 
                hover:text-[#F05033] hover:bg-[#F05033]/10
                hover:border-[#F05033] dark:hover:text-[#F05033] dark:bg-transparent 
                dark:hover:bg-[#F05033]/10 dark:hover:border-[#F05033] transition-colors duration-200 ease-in-out"
                  onClick={() => {
                    const newWindow = window.open(project.sourceUrl, "_blank");
                    if (newWindow) newWindow.opener = null;
                  }}
                >
                  <Github />
                  Source code
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </FadeUp>
    );
  };

  return (
    <Section id="projects" title="Projects" animationOffset={animationOffset}>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((p) => renderProject(p))}
      </div>
    </Section>
  );
}

import type { SkillItem } from "@/types";
import {
  AWS_SKILL,
  DOCKER_SKILL,
  GITHUB_ACTIONS_SKILL,
  PLAYWRIGHT_SKILL,
  PYTHON_SKILL,
  REACT_SKILL,
  SKILLS,
  TS_SKILL,
  VITEST_SKILL,
} from "../utility/skills/constants";
import { SkillsContainer } from "../utility/skills/SkillsContainer";
import { Section } from "../utility/Section";
import { FadeUp } from "../layout/FadeUp";
import { ANIMATION_GAP } from "@/constants";

type RoleConfig = {
  key: string;
  title: string;
  employmentType?: string;
  duration: string;
  bullets?: string[];
  skills?: SkillItem[];
  firstRole?: boolean;
};

export function Experience({ animationOffset }: { animationOffset?: number }) {
  function calculateDurationFrom(startDate: string): string {
    const start = new Date(startDate); // Parse the start date
    const now = new Date(); // Current date

    let years = now.getUTCFullYear() - start.getUTCFullYear();
    let months = now.getUTCMonth() - start.getUTCMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const yearText = years === 1 ? "1 yr" : `${years} yrs`;
    const monthText = months === 1 ? "1 mo" : `${months} mos`;

    return years > 0 ? `${yearText} ${monthText}` : monthText;
  }

  const roles: RoleConfig[] = [
    {
      key: "role-1",
      title: "Software Engineer",
      employmentType: "Full-time",
      duration: `Jul 2025 - Present · ${calculateDurationFrom("2025-06-30")}`,
      bullets: [
        "Frontend lead for the new IB&M credit origination web platform",
        "Continued to support and add new frontend features to my delivered IB&M tool based on user feedback",
        "Undertook AWS training and certification to support the bank-wide migration to AWS",
        "Responsible for mentoring and supporting new members of the team with onboarding, best practices and code reviews",
      ],
      skills: [
        SKILLS[REACT_SKILL],
        SKILLS[TS_SKILL],
        SKILLS[VITEST_SKILL],
        SKILLS[PLAYWRIGHT_SKILL],
        SKILLS[DOCKER_SKILL],
        SKILLS[GITHUB_ACTIONS_SKILL],
        SKILLS[AWS_SKILL],
      ],
    },
    {
      key: "role-2",
      title: "Associate Software Engineer",
      employmentType: "Full-time",
      duration: "Aug 2024 - June 2025 · 11 mos",
      bullets: [
        "Continued frontend web development for the IB&M tool I delivered during my internship under the guidance of senior engineers and in collaboration with PO, UX, business analysts and users",
        "Created a comprehensive suite of unit and integration tests (in Vitest & Playwright) that ensured zero frontend-caused downtime post-launch",
        "Balanced the full-time graduate-level role during my final five months of university",
      ],
      skills: [
        SKILLS[REACT_SKILL],
        SKILLS[TS_SKILL],
        SKILLS[VITEST_SKILL],
        SKILLS[PLAYWRIGHT_SKILL],
        SKILLS[DOCKER_SKILL],
        SKILLS[GITHUB_ACTIONS_SKILL],
      ],
    },
    {
      key: "role-3",
      title: "Quant Apps Engineer",
      employmentType: "Internship",
      duration: "Feb 2024 - Jul 2024 · 6 mos",
      bullets: [
        "Built the frontend for a tool that is now used daily by risk analysts across IB&M",
        "Utilised Python Matplotlib, Pandas and prioritary backend packages for thesis data analysis and visualisation",
        "Completed my university thesis for CBA investigating component library use in Fin-tech applications",
      ],
      skills: [SKILLS[REACT_SKILL], SKILLS[TS_SKILL], SKILLS[PYTHON_SKILL]],
      firstRole: true,
    },
  ];

  const renderRole = (r: RoleConfig, index: number) => {
    return (
      <FadeUp
        delay={(animationOffset ?? 0) + index * (ANIMATION_GAP / roles.length)}
        key={r.key}
      >
        <div className="flex gap-2 text-muted-foreground">
          <div className="flex mx-1 w-[60px]">
            <div className="flex w-full justify-center mt-1.75 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground" />
              {!r.firstRole && (
                <div className="absolute top-4 w-[1px] h-full bg-muted-foreground" />
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="text-primary font-bold">{r.title}</div>
                {r.employmentType && (
                  <div className="text-primary">{r.employmentType}</div>
                )}
                <div>{r.duration}</div>
              </div>

              {r.bullets && r.bullets.length > 0 && (
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {r.skills && r.skills.length > 0 && (
                <div className="mb-2">
                  <SkillsContainer skills={r.skills} />
                </div>
              )}
            </div>
          </div>
        </div>
      </FadeUp>
    );
  };

  return (
    <Section
      id="experience"
      title="Experience"
      animationOffset={animationOffset}
    >
      {/* Company */}

      <FadeUp delay={animationOffset}>
        <div className="flex gap-2 text-muted-foreground">
          <div className="flex mx-2 w-[50px] items-center justify-center">
            <img
              className="w-[50px] h-auto object-contain"
              src="/cba-logo.png"
              alt="Commonwealth Bank logo"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              <div className="text-primary font-bold">Commonwealth Bank</div>
              <div className="text-primary">
                {calculateDurationFrom("2024-01-01")}
              </div>
              <div>Sydney, New South Wales, Australia · On-site</div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Roles */}
      <div className="space-y-4">{roles.map(renderRole)}</div>
    </Section>
  );
}

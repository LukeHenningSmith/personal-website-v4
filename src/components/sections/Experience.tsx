import LinkableHeading from "../LinkableHeading";
import { Skills } from "../Skills";

export function Experience() {
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

  const skills = [
    {
      id: "typescript",
      label: "Typescript",
      imgSrc: "/tech-icons/typescript-logo.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      id: "react",
      label: "React",
      imgSrc: "/tech-icons/react-logo.png",
      url: "https://reactjs.org/",
    },
    {
      id: "python",
      label: "Python",
      imgSrc: "/tech-icons/python-logo.svg",
      url: "https://www.python.org/",
    },
    {
      id: "aws",
      label: "AWS",
      imgSrc: "/tech-icons/aws-logo.svg",
      url: "https://www.aws.com/",
    },
    {
      id: "docker",
      label: "Docker",
      imgSrc: "/tech-icons/docker-logo.svg",
      url: "https://www.docker.com/",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <LinkableHeading id="experience">Experience</LinkableHeading>

      {/* Company */}
      <div className="flex gap-1 text-muted-foreground">
        <div className="flex mx-1 w-[60px] align-middle justify-center">
          <img className="w-[50px]" src="/cba-logo.svg" />
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

      {/* Role 1 */}
      <div className="flex gap-1 text-muted-foreground ">
        <div className="flex mx-1 w-[60px]">
          <div className="flex w-full justify-center mt-1.75 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground" />
            <div className="absolute top-4 w-[1px] h-full bg-muted-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="text-primary font-bold">Software Engineer</div>
              <div className="text-primary">Full-time</div>
              <div>
                Jul 2025 - Present · {calculateDurationFrom("2025-06-30")}
              </div>
            </div>

            <ul className="list-disc pl-5">
              <li>
                Frontend lead for the new IB&M credit origination platform
              </li>
            </ul>

            <div className="mb-2">
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>

      {/* Role 2 */}
      <div className="flex gap-1 text-muted-foreground">
        <div className="flex mx-1 w-[60px]">
          <div className="flex w-full justify-center mt-1.75 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground" />
            <div className="absolute top-4 w-[1px] h-full bg-muted-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="text-primary font-bold">
                Associate Software Engineer
              </div>
              <div className="text-primary">Full-time</div>
              <div>Aug 2024 - June 2025 · 11 mos</div>
            </div>

            <ul className="list-disc pl-5">
              <li>
                Undertook the graduate-level role full-time during my final five
                months of university
              </li>
            </ul>

            <div className="mb-2">
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>

      {/* Role 3 */}
      <div className="flex gap-1 text-muted-foreground">
        <div className="flex mx-1 w-[60px]">
          <div className="flex w-full justify-center mt-1.75 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="text-primary font-bold">Quant Apps Engineer</div>
              <div className="text-primary">Internship</div>
              <div>Feb 2024 - Jul 2024 · 6 mos</div>
            </div>

            <ul className="list-disc pl-5">
              <li>
                Built a tool that is now used daily by risk analysts across IB&M
              </li>
              <li>
                Completed my thesis for CBA investigating component library use
                in Fin-tech applications
              </li>
            </ul>

            <div className="mb-2">
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

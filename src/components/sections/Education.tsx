import { ExternalLink } from "lucide-react";
import { FadeUp } from "../layout/FadeUp";
import { Button } from "../ui/button";
import { Section } from "../utility/Section";

export function Education({ animationOffset }: { animationOffset?: number }) {
  return (
    <Section id="education" title="Education" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <div className="flex gap-2 text-muted-foreground">
          <div className="flex mx-2 w-[50px] align-middle justify-center">
            <img
              src="/usyd-logo-light.png"
              alt="Logo"
              className="w-[50px] h-auto object-contain block dark:hidden"
            />
            <img
              src="/usyd-logo-dark.png"
              alt="Logo"
              className="w-[50px] h-auto object-contain hidden dark:block"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              <div className="text-primary font-bold">University of Sydney</div>
              <div className="text-primary">
                Bachelor of Engineering Honours (Software Engineering) and
                Bachelor of Science (Chemistry)
              </div>
              <div>2019 - 2024</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex mx-1 w-[60px] align-middle justify-center"></div>

          <div className="flex-1 flex flex-col gap-2 mt-2">
            <div>Grade: Honours Class I and the University Medal</div>
            <div>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>1st in Software Engineering graduating class</li>
                  <li>
                    Dean's List of Excellence in Academic Performance (2019, 22,
                    23)
                  </li>
                  <li>Academic Merit Prize (2022)</li>
                  <li>
                    Engineering Sydney Industry Placement Scholarship (ESIPS)
                  </li>
                  <li>Dalyell Scholar</li>
                  <li>
                    Thesis (93/100) on the Tracking of user interactions with
                    interface component libraries across multi-app Fin-tech
                    systems, a Joint Venture with CBA through the ESIPS research
                    Scholarship.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-1">
              <Button
                variant={"outline"}
                size={"sm"}
                title="View academic transcript"
                className="group relative cursor-pointer text-muted-foreground bg-transparent hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600 dark:hover:text-blue-300 dark:bg-transparent dark:hover:bg-blue-600/10 dark:hover:border-blue-600 transition-colors duration-200 ease-in-out"
                onClick={() => {
                  const newWindow = window.open(
                    "https://www.myequals.net/sharelink/f8269a17-4f0c-4a01-b1c1-30bfbab6ea71/10d20b81-93a9-4dfe-b905-bbf59cd6de24",
                    "_blank"
                  );
                  if (newWindow) newWindow.opener = null;
                }}
              >
                <ExternalLink />
                View academic transcript
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

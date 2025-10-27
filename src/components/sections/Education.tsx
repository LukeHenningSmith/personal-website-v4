import LinkableHeading from "../LinkableHeading";

export function Education() {
  return (
    <div className="flex flex-col gap-4">
      <LinkableHeading id="education">Education</LinkableHeading>

      <div className="flex gap-1 text-muted-foreground">
        <div className="flex mx-1 w-[60px] align-middle justify-center">
          <img
            src="/usyd-logo-light.svg"
            alt="Logo"
            className="w-[50px] block dark:hidden"
          />
          <img
            src="/usyd-logo-dark.svg"
            alt="Logo"
            className="w-[50px] hidden dark:block"
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
      <div className="flex gap-1">
        <div className="flex mx-1 w-[60px] align-middle justify-center"></div>

        <div className="flex-1">
          Grade: Honours Class I and the University Medal
        </div>
      </div>
    </div>
  );
}

import { Button } from "../ui/button";

function Intro() {
  const technologies = [
    {
      id: "typescript",
      label: "Typescript",
      imgSrc: "/tech-icons/typescript-logo.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      id: "react",
      label: "React",
      imgSrc: "/tech-icons/react-logo.svg",
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
    <div className="flex flex-col gap-4 text-base text-muted-foreground">
      <span>
        Hi! I'm Luke, a software engineer from Sydney with 2 years experience
        building fullstack web applications in the finance industry. The
        technologies I am most experienced with are:
      </span>

      <div className="flex gap-2 mb-4">
        {technologies.map((tech) => (
          <Button
            id={tech.id}
            key={tech.id}
            variant={"default"}
            size={"sm"}
            className="cursor-pointer dark:bg-secondary bg-[oklch(0.9_0_0)] text-muted-foreground hover:text-primary hover:bg-secondary hover:bg-[oklch(0.92_0_0)]"
            onClick={() => {
              const newWindow = window.open(tech.url, "_blank");
              if (newWindow) newWindow.opener = null;
            }}
          >
            <img src={tech.imgSrc} width={20} />
            {tech.label}
          </Button>
        ))}
      </div>

      <span>
        <i>
          I am also an avid skiier with a{" "}
          <u
            className="hover:text-primary cursor-pointer"
            onClick={() => {
              console.log("TODO");
            }}
          >
            bucket list
          </u>{" "}
          to ski all over the world.
        </i>
      </span>
    </div>
  );
}

export default Intro;

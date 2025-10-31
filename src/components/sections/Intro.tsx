import { scrollToId } from "../layout/Header";
import { Skills } from "../Skills";

export function Intro() {
  const skills = [
    {
      id: "typescript",
      label: "Typescript",
      imgSrc: "/tech-icons/typescript-logo.png",
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
      imgSrc: "/tech-icons/aws-logo.png",
      url: "https://www.aws.com/",
    },
    // {
    //   id: "docker",
    //   label: "Docker",
    //   imgSrc: "/tech-icons/docker-logo.svg",
    //   url: "https://www.docker.com/",
    // },
  ];

  return (
    <div className="flex flex-col gap-4 text-base text-muted-foreground">
      <span>
        Hi! I'm Luke, a software engineer from Sydney with 2 years experience
        building fullstack web applications in the finance industry. The
        technologies I am most experienced with are:
      </span>

      <Skills skills={skills} />

      <span className="mt-2">
        <i>
          I am also an avid skiier with a{" "}
          <u
            className="hover:text-primary cursor-pointer"
            onClick={() => scrollToId("skiing")}
          >
            bucket list
          </u>{" "}
          to ski all over the world.
        </i>
      </span>
    </div>
  );
}

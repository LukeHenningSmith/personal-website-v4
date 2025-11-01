import "./App.css";
import SkiTracks from "./components/SkiTracks";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Footer } from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollTop from "./components/layout/ScrollTopButton";
import { Title } from "./components/sections/Title";
import { Intro } from "./components/sections/Intro";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Skiing } from "./components/sections/Skiing";
import { FadeUp } from "./components/layout/FadeUp";
import { ANIMATION_GAP } from "./constants";
import type { FC } from "react";

function App() {
  const sections: {
    key: string;
    node: FC<{ animationOffset?: number }>;
  }[] = [
    { key: "intro", node: Intro },
    { key: "experience", node: Experience },
    { key: "education", node: Education },
    { key: "projects", node: Projects },
    { key: "skiing", node: Skiing },
  ];

  return (
    <ThemeProvider defaultTheme="dark">
      <SkiTracks />
      <ScrollTop />

      <FadeUp delay={ANIMATION_GAP}>
        <Header />
      </FadeUp>

      <main className="flex-1 flex justify-center py-16 overflow-y-auto px-10">
        <div className="w-full max-w-4xl space-y-12">
          <FadeUp delay={ANIMATION_GAP}>
            <Title />
          </FadeUp>

          <div className="space-y-16">
            {sections.map((s, i) => (
              <s.node key={s.key} animationOffset={ANIMATION_GAP * (i + 2)} />
            ))}
          </div>
        </div>
      </main>

      <Footer animationOffset={ANIMATION_GAP * (sections.length + 1)} />
    </ThemeProvider>
  );
}

export default App;

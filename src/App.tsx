import type { ReactNode } from "react";
import "./App.css";
import CascadingContent from "./components/CascadingContent";
import Header from "./components/Header";
import SkiTracks from "./components/ui/SkiTracks";
import { ThemeProvider } from "./components/theme/theme-provider";
import { MapPin } from "lucide-react";
import Intro from "./components/sections/Intro";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Skiing from "./components/sections/Skiing";

// TODO list:
// 1. If u choose light/dark-mode, it should set in local storage and use that instead of your 'default'?

function App() {
  const pageContent: ReactNode[] = [
    <Intro />,
    <Experience />,
    <Education />,
    <Projects />,
    <Skiing />,
  ];

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        <SkiTracks />

        <Header />

        <main className="flex-1 flex justify-center py-16 overflow-y-auto">
          <div className="w-full max-w-4xl space-y-12 px-4">
            <div className="w-full max-w-4xl space-y-2">
              <h1 className="text-4xl font-bold">Luke Henning-Smith</h1>
              <h2 className="text-xl text-muted-foreground">
                Software Engineer
              </h2>
              <p className="text-sm italic flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                Sydney, Australia
              </p>
            </div>

            <CascadingContent content={pageContent} />
          </div>
        </main>

        <footer className="w-full py-4 flex justify-center">
          <span className="text-sm text-muted-foreground">
            © 2025 Luke Henning-Smith. All rights reserved.
          </span>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

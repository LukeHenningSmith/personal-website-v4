import type { ReactNode } from "react";
import "./App.css";
import CascadingContent from "./components/CascadingText";
import Header from "./components/Header";

function App() {
  const pageContent: ReactNode[] = [
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
    <div>lalala</div>,
    <div>papapa</div>,
    <div>zazaza</div>,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex justify-center py-8 overflow-y-auto">
        <div className="w-full max-w-4xl px-4">
          <h1 className="text-3xl font-bold mb-4">Luke Henning-Smith</h1>

          <CascadingContent content={pageContent} />

          <div></div>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "../layout/FadeUp";
import { Section } from "../utility/Section";
import { ANIMATION_GAP } from "@/constants";

type SkiImage = {
  src: string;
  alt?: string;
  location: string;
  time: string;
};

const IMAGES: SkiImage[] = [
  // TODO: Add a description of something fun there
  {
    src: "/mountain.jpg",
    alt: "Ridge",
    location: "Thredbo, Australia",
    time: "Jul 2025",
  },
  {
    src: "/mountain.jpg",
    alt: "Powder line",
    location: "Hakuba, Japan",
    time: "Jan 2025",
  },
  {
    src: "/mountain.jpg",
    alt: "Tree run",
    location: "Zao, Japan",
    time: "Jan 2019",
  },
  {
    src: "/mountain.jpg",
    alt: "Summit",
    location: "Vermont, USA",
    time: "XXX 2017",
  },
];

export function Skiing({ animationOffset }: { animationOffset?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openIndex !== null) {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const handleOpen = (i: number) => {
    setIsClosing(false);
    setOpenIndex(i);
  };

  const handleClose = () => {
    if (prefersReduced) {
      setOpenIndex(null);
      setIsClosing(false);
      return;
    }
    setIsClosing(true);
    // match transition duration below (200ms)
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenIndex(null);
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, 220);
  };

  return (
    <Section id="skiing" title="Skiing" animationOffset={animationOffset}>
      <FadeUp delay={animationOffset}>
        <p className="my-2 text-muted-foreground">
          The unique places I have visited:
        </p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {IMAGES.map((img, i) => (
          <FadeUp
            delay={(animationOffset ?? 0) + (ANIMATION_GAP / IMAGES.length) * i}
            key={img.src}
          >
            <div
              className="group relative h-40 sm:h-56 w-full overflow-hidden rounded-lg cursor-pointer hover:scale-101 transition-transform duration-300"
              onClick={() => handleOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOpen(i);
              }}
            >
              <img
                src={img.src}
                alt={img.alt ?? img.location}
                className="w-full h-full object-cover transform transition-transform duration-300"
                loading="lazy"
              />

              {/* bottom gradient and info */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              <div className="absolute left-3 bottom-3 text-white z-10 pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 transition-opacity transition-transform duration-200 ease-in-out">
                <div className="text-sm font-semibold drop-shadow">
                  {img.location}
                </div>
                <div className="text-xs opacity-90 drop-shadow">{img.time}</div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Modal / lightbox for enlarged image */}
      {openIndex !== null ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 ${isClosing ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative max-w-[90%] max-h-[85%] w-[min(1100px,90%)] rounded-lg overflow-hidden bg-black`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[openIndex].src}
              alt={IMAGES[openIndex].alt ?? IMAGES[openIndex].location}
              className={`w-full h-[70vh] object-cover transition-transform duration-200 ${isClosing ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)",
              }}
            />

            <button
              className="absolute right-3 top-3 z-20 rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
              onClick={handleClose}
              aria-label="Close enlarged image"
            >
              ✕
            </button>

            <div className="p-4 bg-gradient-to-t from-black/60 text-white">
              <div className="text-lg font-semibold">
                {IMAGES[openIndex].location}
              </div>
              <div className="text-sm opacity-90">{IMAGES[openIndex].time}</div>
            </div>
          </div>
        </div>
      ) : null}

      {/* bucket list */}
      <FadeUp delay={(animationOffset ?? 0) + ANIMATION_GAP}>
        <div className="mt-6">
          <h3 className="text-primary mb-2">Skiing bucket list</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>British Columbia, Canada — backcountry chutes</li>
            <li>Alaska, USA — deep powder and big runs</li>
            <li>New Zealand Southern Alps — long alpine descents</li>
            <li>Russia / Kamchatka — remote volcano skiing</li>
            <li>Heli-skiing - anywhere</li>
          </ul>
        </div>
      </FadeUp>
    </Section>
  );
}

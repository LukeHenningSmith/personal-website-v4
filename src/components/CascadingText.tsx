import { motion } from "framer-motion";
import type { ReactNode } from "react";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function CascadingContent({
  content,
}: {
  content: ReactNode[];
}) {
  return (
    <div className="space-y-4">
      {content.map((element, i) => (
        <motion.p
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {element}
        </motion.p>
      ))}
    </div>
  );
}

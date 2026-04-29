/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type prop = {
  items: string[];
};

const TextArray = ({ items }: prop) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[activeIndex]}
          className="h-full flex text-foreground/80 pl-2 text-sm  sm:text-md md:text-lg items-center font-mono"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.95 , ease: "anticipate" }}
        >
          {items[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextArray;
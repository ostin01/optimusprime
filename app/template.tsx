"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    // Determine the direction based on history state
    const handleRouteChange = () => {
      const historyIndex = window.history.state.idx;

      // Compare the current index with previous index
      if (historyIndex > 1) {
        setDirection(-1); // Back navigation
      } else {
        setDirection(1); // Forward navigation
      }
    };

    handleRouteChange(); // Check on initial mount and every route change
  }, [pathname]);

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // Ensure animation triggers when route changes
          initial={{
            x: direction === 1 ? 100 : -100, // Forward: from the right, Backward: from the left
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }} // Move to center
          exit={{
            x: direction === 1 ? -100 : 100, // Forward: out to the left, Backward: out to the right
            opacity: 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ minHeight: "100vh", width: "100vw" }} // Full viewport size to prevent overflow
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

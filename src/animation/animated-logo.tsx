import { AnimatePresence, motion, Variants } from "framer-motion";

const iconVariant: Variants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(31, 141, 147, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "#1f8d93",
  },
};

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.svg
        width={128}
        height={128}
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        {/* T Logo Path */}
        <motion.path
          d="M20 20 H108 V36 H76 V108 H52 V36 H20 Z"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          stroke="#1f8d93"
          strokeWidth={2}
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
            fill: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}

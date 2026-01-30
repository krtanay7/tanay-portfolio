import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList({
  title,
  details,
}: ExperienceShowcaseListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mx-auto my-32 max-w-7xl px-6 sm:px-14 md:px-20">
      
      <h2 className="mb-14 text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-5xl md:text-7xl">
      {title}
      </h2>


      <div ref={ref} className="relative mx-auto w-full md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 top-0 h-full w-[3px] origin-top rounded-full bg-accent"
        />

        <ul className="flex flex-col">
          {details.map((item, index) => (
            <ExperienceShowcaseListItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

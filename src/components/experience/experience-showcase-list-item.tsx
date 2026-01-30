import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation?: {
    name?: string;
    href?: string;
    logo?: string;
  };
  date: string;
  location: string;
  description: string;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef<HTMLLIElement>(null);
  const organisation = props.organisation;

  return (
    <li ref={ref} className="relative mb-12 flex w-full flex-col pl-14">
      {/* BULLET */}
      <span className="absolute left-6 top-2 -translate-x-1/2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
          <span className="h-2.5 w-2.5 rounded-full bg-background" />
        </span>
      </span>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-start justify-between gap-6"
      >
        {/* TEXT */}
        <div>
          <h3 className="text-base font-semibold sm:text-xl">
            {props.title}
          </h3>

          {organisation?.name && organisation?.href ? (
            <Link
              href={organisation.href}
              target="_blank"
              rel="nofollow"
              className="block text-sm font-medium text-accent"
            >
              {organisation.name}
            </Link>
          ) : organisation?.name ? (
            <span className="block text-sm font-medium text-accent">
              {organisation.name}
            </span>
          ) : null}

          <span className="mt-1 block text-sm text-muted-foreground">
            {props.date} · {props.location}
          </span>

          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            {props.description}
          </p>
        </div>

        {/* LOGO SIZE INCREASED HERE */}
        {organisation?.logo && (
          <div className="hidden sm:flex h-40 w-40 items-center justify-center rounded-md bg-background/60 backdrop-blur">
            <Image
              src={organisation.logo}
              alt={organisation.name ?? "Organisation Logo"}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        )}
      </motion.div>
    </li>
  );
}

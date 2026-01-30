"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar({ routes }: NavbarProps) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  /**
   * Handles active state for hash routes
   * Example: /about#education → pathname = /about
   */
 const isActiveRoute = (href: string) => {
  const baseRoute = href.split("#")[0];

  // If this is a hash route (like /about#education),
  // DO NOT mark it active in navbar
  if (href.includes("#")) return false;

  return pathname === baseRoute;
};


  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Return to home page"
          className="flex items-center justify-center rounded-full p-1 ring-1 ring-zinc-200 backdrop-blur-md drop-shadow-teralight dark:ring-accent/50"
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {routes.map((route) => {
              const active = isActiveRoute(route.href);

              return (
                <li
                  key={route.href}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={route.href}
                    className={classNames(
                      active
                        ? "font-semibold text-background dark:hover:text-foreground"
                        : "text-foreground",
                      "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="tab-pill"
                        transition={{
                          x: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                      />
                    )}
                    {route.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeSwitch />
        </nav>

        {/* MOBILE MENU BUTTON */}
        <MenuLogo open={isModalOpen} toggle={toggleModal} />
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        routes={routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}

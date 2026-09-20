"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScroll";
import styles from "@/styles/navbar.module.css";
import { cn } from "@/lib/utils";

/**
 * All nav links point to sections on the home page ("/#about", etc).
 * On the home page, clicking smooth-scrolls to the section. On any other
 * route, Next.js navigates to "/" and the browser scrolls to the hash.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(
    isHome ? ["hero", "about", "skills", "resume", "projects", "contact"] : []
  );

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("/#")) return;
    const id = href.replace("/#", "");

    if (isHome) {
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (id: string) => isHome && activeSection === id;

  return (
    <div className={styles.navwrap}>
      <nav className={styles.navpill}>
        <Link href="/" className={styles.brand}>
          {SITE.domain}
        </Link>
        <div className={styles.navlinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn("tab", isActive(link.id) && "active")}
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScroll";
import styles from "@/styles/navbar.module.css";
import { cn } from "@/lib/utils";

/**
 * Home page sections (hero/about/skills/resume/projects/contact) all live
 * on "/", so on-page links scroll-spy via IntersectionObserver. Dedicated
 * routes (/about, /projects, /contact) highlight based on the current path.
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
    if (!isHome || !href.startsWith("/#")) return;
    const id = href.replace("/#", "");
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (id: string, href: string) => {
    if (href.startsWith("/#")) return isHome && activeSection === id;
    return pathname === href;
  };

  return (
    <div className={styles.navwrap}>
      <nav className={styles.navpill}>
        <div className={styles.brand}>{SITE.domain}</div>
        <div className={styles.navlinks}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn("tab", isActive(link.id, link.href) && "active")}
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

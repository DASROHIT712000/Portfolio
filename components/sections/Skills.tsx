"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";
import styles from "@/styles/skills.module.css";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !scope.current) return;

    const bars = scope.current.querySelectorAll<HTMLElement>(`.${styles.bar}`);
    const tweens = Array.from(bars).map((bar) => {
      const target = bar.style.width;
      bar.style.width = "0%";
      return gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: target,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: bar, start: "top 90%" },
        }
      );
    });

    return () =>
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
  }, []);

  return (
    <section id="skills" ref={scope}>
      <SectionTitle eyebrow="skills" title="// stack --list" />
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <Reveal key={group.title} className={styles.card}>
            <div className={styles.cardHead}>{group.title}</div>
            {group.items.map((item) => (
              <div
                key={item.name}
                className={cn(styles.item, item.learning && styles.itemLearning)}
              >
                <span>
                  {item.name}
                  {item.learning && <span className={styles.tag}>learning</span>}
                </span>
                <div className={styles.barWrap}>
                  <div className={styles.bar} style={{ width: `${item.level}%` }} />
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

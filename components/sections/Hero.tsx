"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Window from "@/components/ui/Window";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import styles from "@/styles/hero.module.css";

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !scope.current) return;

    const ctx = gsap.context(() => {
      gsap.set(`.${styles.photo}, .${styles.terminal}`, { opacity: 0, y: 26 });
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
        .to(`.${styles.photo}`, { opacity: 1, y: 0 })
        .to(`.${styles.terminal}`, { opacity: 1, y: 0 }, "-=0.55")
        .from(
          `.${styles.line}`,
          { opacity: 0, y: 8, stagger: 0.12, duration: 0.5 },
          "-=0.3"
        )
        .from(
          `.${styles.ctas} .btn`,
          { opacity: 0, y: 10, stagger: 0.08, duration: 0.4 },
          "-=0.2"
        );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={scope}>
      <div className={styles.grid}>
        <div className={styles.photo}>
          <span className={`${styles.corner} ${styles.cornerTL}`} />
          <span className={`${styles.corner} ${styles.cornerTR}`} />
          <Image
            src={profile.photo}
            alt={`${profile.name}, ${profile.role.toLowerCase()}, working at his desk with code on dual monitors`}
            fill
            sizes="(max-width: 860px) 100vw, 300px"
            priority
          />
          <div className={styles.photoTag}>
            <span className={styles.blip} /> status: {profile.status}
          </div>
        </div>

        <Window filename="rohit@dev — bash — 80×24" className={styles.terminal}>
          <div className={styles.line}>
            <span className={styles.prompt}>rohit@dev ~$</span>
            <span className={styles.cmd}>whoami</span>
          </div>
          <div className={styles.line}>
            <span className={`${styles.out} ${styles.name}`}>{profile.name}</span>
          </div>
          <div className={styles.line} style={{ marginTop: 2 }}>
            <span className={styles.out}>{profile.tagline}</span>
          </div>

          <div className={styles.line} style={{ marginTop: 22 }}>
            <span className={styles.prompt}>rohit@dev ~$</span>
            <span className={styles.cmd}>cat mission.txt</span>
          </div>
          <div className={styles.line}>
            <span className={styles.out}>
              Turning briefs into fast, maintainable WordPress builds —{" "}
              <strong>3+ years</strong> shipping sites clients actually love.
            </span>
          </div>

          <div className={styles.line} style={{ marginTop: 22 }}>
            <span className={styles.prompt}>rohit@dev ~$</span>
            <span className={styles.cmd}>
              ./currently-learning.sh
              <span className={styles.cursor} />
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.out}>
              Expanding into Python — automation, backend, and beyond.
            </span>
          </div>

          <div className={styles.ctas} style={{ marginTop: 26 }}>
            <Button href="#projects" variant="primary">
              View Projects →
            </Button>
            <Button href="#contact" variant="ghost">
              Get In Touch
            </Button>
          </div>
        </Window>
      </div>
    </section>
  );
}

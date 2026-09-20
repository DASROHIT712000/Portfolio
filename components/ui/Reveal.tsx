"use client";

import { ElementType, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Fades + slides an element in once it scrolls into view. */
export default function Reveal({ children, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !ref.current) return;

    const el = ref.current;
    gsap.set(el, { opacity: 0, y: 24 });
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

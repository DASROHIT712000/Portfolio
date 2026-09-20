import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { facts } from "@/data/experience";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <section id="about">
      <SectionTitle eyebrow="about" title="// who's writing this code" />
      <div className={styles.grid}>
        <Reveal className={styles.text}>
          <p>
            I&apos;m a{" "}
            <span className={styles.highlight}>
              WordPress developer with 3+ years of hands-on experience
            </span>
            , currently working full-time building and maintaining client
            websites — from custom theme development to complex plugin
            logic.
          </p>
          <p>
            My focus is{" "}
            <span className={styles.highlight}>
              practical, deal-focused engineering
            </span>
            : clean PHP, well-structured MySQL, and themes built for speed
            and easy long-term maintenance rather than bloated page-builder
            output.
          </p>
          <p>
            Outside of client work, I&apos;m sharpening my{" "}
            <span className={styles.highlight}>JavaScript and Node.js</span>{" "}
            fundamentals and currently learning{" "}
            <span className={styles.highlight}>Python</span> to move further
            into backend and automation work.
          </p>
        </Reveal>

        <Reveal className={styles.factGrid}>
          {facts.map((fact) => (
            <div className={styles.fact} key={fact.label}>
              <div className={styles.num}>{fact.value}</div>
              <div className={styles.label}>{fact.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

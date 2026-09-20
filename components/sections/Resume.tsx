import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Window from "@/components/ui/Window";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import styles from "@/styles/resume.module.css";

export default function Resume() {
  return (
    <section id="resume">
      <SectionTitle eyebrow="resume" title="// resume.pdf" />
      <Reveal>
        <Window filename="Rohit_Das_CV.pdf" className={styles.window}>
          <div className={styles.icon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M15 2v5h5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M8 12h8M8 15.5h8M8 19h5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.text}>
            <h3>Prefer the classic format?</h3>
            <p>
              Grab a one-page PDF version of my resume — experience,
              projects, and skills, ready to attach to an application or
              send straight to HR.
            </p>
          </div>
          <Button
            href={profile.resumeUrl}
            download="Rohit_Das_CV.pdf"
            variant="amber"
            className={styles.btn}
          >
            ⬇ Download CV (PDF)
          </Button>
        </Window>
      </Reveal>
    </section>
  );
}

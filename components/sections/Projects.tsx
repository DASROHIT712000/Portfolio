import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Window from "@/components/ui/Window";
import { projects } from "@/data/projects";
import { starString } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import styles from "@/styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle eyebrow="projects" title="// selected_work.py" />
      <div className={styles.list}>
        {projects.map((project) => (
          <Reveal
            key={project.id}
            className={cn(styles.card, project.featured && styles.cardFeatured)}
          >
            <Window filename={project.filename}>
              <div
                className={cn(
                  styles.shot,
                  project.featured && styles.shotFeatured
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 780px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.top}>
                  <h3>{project.title}</h3>
                  <span className={styles.stars}>
                    {starString(project.rating)} {project.rating.toFixed(1)}{" "}
                    client review
                  </span>
                </div>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span className={styles.techTag} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  className={styles.link}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site →
                </a>
              </div>
            </Window>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

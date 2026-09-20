import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Window from "@/components/ui/Window";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  const { email, phone, linkedin, github } = profile.social;
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section id="contact">
      <SectionTitle eyebrow="contact" title="// get_in_touch()" />
      <Reveal>
        <Window filename="contact.node" className={styles.window}>
          <div className={styles.comment}>
            // reach out — open to full-time roles &amp; freelance projects
          </div>
          <div className={styles.row}>
            <span className={styles.key}>email:</span>{" "}
            <a className={styles.value} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>phone:</span>{" "}
            <a className={styles.value} href={telHref}>
              {phone}
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>linkedin:</span>{" "}
            <a
              className={styles.value}
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedin}
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>github:</span>{" "}
            <a
              className={styles.value}
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>
          </div>
          <div className={styles.ctas}>
            <Button href={`mailto:${email}`} variant="primary">
              Send an Email
            </Button>
            <Button href={telHref} variant="ghost">
              Call Me
            </Button>
          </div>
        </Window>
      </Reveal>
    </section>
  );
}

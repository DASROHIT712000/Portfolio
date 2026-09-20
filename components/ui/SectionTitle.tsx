interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

/** The "// eyebrow" + "// section-title" heading pattern used by every section. */
export default function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
    </>
  );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WindowProps {
  filename: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/**
 * The "terminal window" chrome (red/yellow/green dots + filename bar)
 * reused by the hero terminal, resume card, project cards, and contact card.
 */
export default function Window({
  filename,
  children,
  className,
  bodyClassName,
}: WindowProps) {
  return (
    <div className={cn("window", className)}>
      <div className="window-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="filename">{filename}</span>
      </div>
      <div className={cn("window-body", bodyClassName)}>{children}</div>
    </div>
  );
}

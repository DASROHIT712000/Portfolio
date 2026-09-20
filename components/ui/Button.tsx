import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "amber";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

/**
 * Renders as an anchor so it works equally well for internal anchors
 * (#contact), mailto/tel links, external links, and file downloads.
 */
export default function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a className={cn("btn", `btn-${variant}`, className)} {...rest}>
      {children}
    </a>
  );
}

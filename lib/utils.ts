/**
 * Joins class names together, filtering out falsy values.
 * Usage: cn("btn", isActive && "active", className)
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

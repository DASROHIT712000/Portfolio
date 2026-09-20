/** Formats a numeric rating like 5 -> "5.0" */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/** Builds a repeated star string for a rating out of 5 */
export function starString(rating: number): string {
  const full = Math.round(rating);
  return "★".repeat(Math.max(0, Math.min(5, full)));
}

/** Returns true when running in the browser (safe for SSR checks) */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

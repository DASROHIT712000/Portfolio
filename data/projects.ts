import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "gotlib-legal",
    filename: "gotliblegal.com",
    title: "Gotlib Legal",
    image: "/images/project1.png",
    alt: "Gotlib Legal website homepage — New Jersey real estate law firm",
    description:
      "Content-focused website for a New Jersey real estate law firm — built for fast attorney-review lead capture, clear service pages, and easy content updates for a non-technical team.",
    tech: ["WordPress", "Custom Theme", "PHP", "MySQL"],
    url: "https://gotliblegal.com/",
    rating: 5.0,
    featured: true,
  },
  {
    id: "zip-fm",
    filename: "zipfm.net",
    title: "Zip FM 103",
    image: "/images/project2.png",
    alt: "Zip FM 103 radio station website homepage",
    description:
      "Full website build for a live radio station — custom theme with a \u201clisten live\u201d stream integration, events, career listings, and an editorial content structure for the station\u2019s team.",
    tech: ["WordPress", "Custom Theme", "JavaScript", "PHP"],
    url: "https://zipfm.net/",
    rating: 5.0,
  },
  {
    id: "kriveda-biosmetic",
    filename: "krivedabiosmetic.in",
    title: "Kriveda Biosmetic",
    image: "/images/project3.png",
    alt: "Kriveda Biosmetic ecommerce homepage — Ayurvedic skincare store",
    description:
      "WooCommerce store for an Ayurvedic skincare brand — custom product pages, cart & wishlist flow, and a theme built around the brand's clean, botanical identity.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    url: "https://krivedabiosmetic.in/",
    rating: 5.0,
  },
];

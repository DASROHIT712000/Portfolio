import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Rohit Das",
};

export default function ContactPage() {
  return <Contact />;
}

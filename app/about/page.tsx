import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About — Rohit Das",
};

export default function AboutPage() {
  return <About />;
}

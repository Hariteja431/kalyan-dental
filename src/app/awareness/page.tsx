import { AwarenessPage } from "@/components/awareness/AwarenessPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Health Awareness & Treatments | Kalyan Dental",
  description: "Learn about the cost of dental neglect and explore detailed infographics on root canals, implants, braces, and other common dental treatments.",
};

export default function AwarenessRoutePage() {
  return <AwarenessPage />;
}

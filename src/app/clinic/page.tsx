import { ClinicPage } from "@/components/clinic/ClinicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clinic & Services | Kalyan Dental Rajahmundry",
  description: "Explore our modern dental clinic in Rajamahendravaram. We offer root canals, implants, braces, and specialized treatments in a hygienic, comfortable environment.",
};

export default function ClinicRoutePage() {
  return <ClinicPage />;
}

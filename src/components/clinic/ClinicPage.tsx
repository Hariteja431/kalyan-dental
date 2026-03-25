import { About } from "./About";
import { Appointment } from "./Appointment";
import { ClinicGallery } from "./ClinicGallery";
import { Doctors } from "./Doctors";
import { FindUs } from "./FindUs";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { WhyChoose } from "./WhyChoose";

export function ClinicPage() {
  return (
    <>
      <Hero />
      <About />
      <Doctors />
      <Services />
      <ClinicGallery />
      <WhyChoose />
      <Testimonials />
      <Appointment />
      <FindUs />
    </>
  );
}

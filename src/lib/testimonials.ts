/** PRD §1.6 — Mock testimonials */

export type Testimonial = {
  quote: string;
  name: string;
  treatment: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had been avoiding the dentist for years out of fear. The team at Kalyan Dental completely changed that. My root canal was painless and the staff made me feel comfortable throughout.",
    name: "Ravi Shankar",
    treatment: "Root Canal Treatment",
    stars: 5,
  },
  {
    quote:
      "Dr. Swetha transformed my smile with veneers and I couldn't be happier. The clinic is clean, modern, and the doctors genuinely listen to what you want.",
    name: "Priya Lakshmi",
    treatment: "Smile Makeover",
    stars: 5,
  },
  {
    quote:
      "My daughter used to cry at the dentist. After one visit to Dr. Lalitha, she was excited to come back. The pediatric approach here is exceptional.",
    name: "Anand Varma",
    treatment: "Pediatric Dentistry",
    stars: 5,
  },
];

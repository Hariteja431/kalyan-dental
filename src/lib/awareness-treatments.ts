/** PRD §2.4 — Treatment guide (9 treatments) */

export type TreatmentItem = {
  id: string;
  title: string;
  short: string;
  duration: string;
  pain: "low" | "moderate" | "managed";
  painNote: string;
  infographic?: { w: number; h: number; label: string };
  sections: { title?: string; body?: string[]; list?: string[] }[];
};

export const treatments: TreatmentItem[] = [
  {
    id: "filling",
    title: "Tooth Filling",
    short:
      "Repair a cavity with a tooth-coloured material that blends perfectly.",
    duration: "20–45 min",
    pain: "low",
    painNote: "Usually painless with local anaesthesia",
    infographic: {
      w: 480,
      h: 260,
      label: "Infographic: 6-step tooth filling process visual",
    },
    sections: [
      {
        body: [
          "Step 1: Anaesthesia — Local injection to numb the area",
          "Step 2: Removal — Decayed tissue is removed with a drill",
          "Step 3: Shaping — Cavity is shaped to hold the filling material",
          "Step 4: Filling — Tooth-coloured composite resin is placed in layers",
          "Step 5: Curing — UV light hardens each layer of resin",
          "Step 6: Polishing — Filling is shaped and polished to match your bite",
        ],
      },
      {
        title: "Aftercare",
        body: [
          "Some sensitivity is normal for a few days. Avoid very hard or sticky foods for 24 hours.",
        ],
      },
    ],
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    short:
      "Save your natural tooth and relieve severe pain caused by deep infection.",
    duration: "60–90 min (1–2 visits)",
    pain: "moderate",
    painNote: "Procedure itself is low pain with modern anaesthesia",
    infographic: {
      w: 480,
      h: 280,
      label: "Infographic: Root canal anatomy and step-by-step process",
    },
    sections: [
      {
        title: "The Reality",
        body: [
          "Root canals have an undeserved reputation for being painful. With modern anaesthesia, most patients report the procedure feels similar to getting a filling.",
        ],
      },
      {
        body: [
          "Step 1: X-ray — To assess infection extent",
          "Step 2: Anaesthesia — Area is numbed thoroughly",
          "Step 3: Isolation — Rubber dam placed to keep area dry",
          "Step 4: Access — Small opening made in the crown of the tooth",
          "Step 5: Cleaning — Infected pulp and nerve tissue removed with files",
          "Step 6: Shaping — Root canals are shaped and measured precisely",
          "Step 7: Disinfection — Canals are irrigated with antibacterial solution",
          "Step 8: Filling — Canals filled with gutta-percha material and sealed",
          "Step 9: Crown (usually) — A crown is recommended to protect the tooth",
        ],
      },
    ],
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    short: "Safe removal of a tooth that is too damaged to be saved.",
    duration: "15–45 min",
    pain: "low",
    painNote: "Low during procedure (full anaesthesia)",
    infographic: {
      w: 480,
      h: 260,
      label: "Infographic: Extraction aftercare do's and don'ts",
    },
    sections: [
      {
        title: "Simple vs Surgical",
        body: [
          "Simple: Tooth visible above gum — loosened with elevator, removed with forceps",
          "Surgical: Tooth impacted or broken — small incision in gum required (wisdom teeth)",
        ],
      },
      {
        title: "Post-care",
        list: [
          "Bite on gauze for 30–45 minutes",
          "Avoid hot food for 24 hours",
          "Do not spit or use a straw (dislodges clot)",
          "Take prescribed painkillers as directed",
          "No smoking for 72 hours",
          "Do not poke the socket with your tongue",
        ],
      },
    ],
  },
  {
    id: "implant",
    title: "Dental Implant",
    short:
      "The most permanent and natural-looking solution for a missing tooth.",
    duration: "3–6 months total process",
    pain: "managed",
    painNote: "Managed with anaesthesia and pain medication",
    infographic: {
      w: 300,
      h: 200,
      label: "Diagram: Implant post, abutment, and crown labeled",
    },
    sections: [
      {
        title: "Process Overview",
        body: [
          "Phase 1 (Day 1): Titanium post implanted into jawbone (surgery, takes 1–2 hrs)",
          "Phase 2 (2–6 months): Osseointegration — bone fuses with titanium post",
          "Phase 3 (1–2 visits): Abutment placed, custom crown fitted",
        ],
      },
      {
        title: "Why It's Worth It",
        list: [
          "Looks and feels like a natural tooth",
          "No impact on adjacent teeth (unlike bridges)",
          "Can last a lifetime with proper care",
          "Preserves jawbone — prevents bone loss",
        ],
      },
    ],
  },
  {
    id: "ortho",
    title: "Braces & Clear Aligners",
    short:
      "Gradual, guided movement of your teeth to achieve a straighter, healthier smile.",
    duration: "12–36 months",
    pain: "moderate",
    painNote: "Mild discomfort after adjustments (normal)",
    infographic: {
      w: 480,
      h: 260,
      label: "Infographic: How braces move teeth over time — before/during/after",
    },
    sections: [
      {
        title: "Types of Braces",
        body: [
          "Metal Braces — Most affordable, highly effective, visible",
          "Ceramic Braces — Tooth-coloured brackets, less noticeable",
          "Clear Aligners — Nearly invisible, removable, premium option",
        ],
      },
      {
        title: "Key Note",
        body: [
          "Orthodontics is not just cosmetic — misaligned teeth are harder to clean and more prone to decay and gum disease.",
        ],
      },
    ],
  },
  {
    id: "crown",
    title: "Dental Crown",
    short:
      "A cap placed over a damaged tooth to restore its shape, strength, and appearance.",
    duration: "2 visits over 1–2 weeks",
    pain: "low",
    painNote: "Low",
    infographic: {
      w: 480,
      h: 240,
      label: "Infographic: Dental crown placement process",
    },
    sections: [
      {
        title: "When You Need a Crown",
        list: [
          "After a root canal (protects weakened tooth)",
          "Large cavity that a filling can't fix",
          "Cracked tooth",
          "Severely worn tooth",
          "Part of a dental bridge",
        ],
      },
      {
        title: "Process",
        body: [
          "Tooth is filed down → Impression taken → Temporary crown placed → Permanent crown fabricated in lab → Permanently cemented at next visit",
        ],
      },
    ],
  },
  {
    id: "whitening",
    title: "Professional Teeth Whitening",
    short:
      "Safe, effective bleaching under dental supervision — far superior to over-the-counter products.",
    duration: "60–90 min (in-office)",
    pain: "low",
    painNote: "Low (some temporary sensitivity)",
    infographic: {
      w: 480,
      h: 240,
      label: "Infographic: How tooth whitening gel works on enamel",
    },
    sections: [
      {
        title: "In-Office vs At-Home Professional",
        body: [
          "In-Office: High-concentration bleach + activation light — dramatic results in 1 session",
          "Take-Home Kits: Custom trays made by dentist + professional-grade gel — gradual whitening over 2 weeks",
        ],
      },
      {
        title: "Important Truths",
        list: [
          "Whitening only works on natural teeth — crowns and veneers won't change color",
          "Results last 6 months to 2 years depending on habits",
          "Avoiding coffee, tea, red wine, and tobacco extends results",
          "Not suitable for everyone — a dentist consultation determines candidacy",
        ],
      },
    ],
  },
  {
    id: "srp",
    title: "Scaling & Root Planing",
    short:
      "A deep cleaning treatment to remove tartar below the gumline and treat early-to-moderate gum disease.",
    duration: "60–120 min (1–2 visits)",
    pain: "moderate",
    painNote: "Mild (local anaesthesia usually applied)",
    infographic: {
      w: 480,
      h: 260,
      label: "Infographic: Scaling & root planing — tartar removal above and below the gumline",
    },
    sections: [
      {
        title: "Regular Cleaning vs Deep Cleaning",
        body: [
          "Regular Scaling: Removes tartar above and at the gumline — preventive",
          "Root Planing: Also cleans the root surface below gumline — therapeutic for gum disease",
        ],
      },
      {
        title: "What to Expect After",
        list: [
          "Gum tenderness for 2–3 days",
          "Some bleeding when brushing (reduces as gums heal)",
          "Tooth sensitivity may temporarily increase",
          "Follow-up visit to check healing",
        ],
      },
    ],
  },
  {
    id: "bridge",
    title: "Dental Bridge",
    short:
      "Replace one or more missing teeth using the support of adjacent natural teeth.",
    duration: "2–3 visits over 2–3 weeks",
    pain: "low",
    painNote: "Low",
    infographic: {
      w: 480,
      h: 240,
      label: "Infographic: Dental bridge components — abutments and pontic",
    },
    sections: [
      {
        title: "How It Works",
        body: [
          "The two teeth on either side of the gap are filed down and fitted with crowns. A false tooth (pontic) is attached between these crowns, bridging the gap.",
        ],
      },
      {
        title: "Bridge vs Implant — Quick Comparison",
        body: [
          "Bridge: Faster, more affordable, but adjacent teeth must be altered",
          "Implant: Longer process, more expensive, but no impact on healthy adjacent teeth",
        ],
      },
    ],
  },
];

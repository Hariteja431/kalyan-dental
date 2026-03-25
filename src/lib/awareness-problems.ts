/** PRD §2.3 — Common dental problems (8 tabs) */

export type ProblemTab = {
  id: string;
  label: string;
  infographic: { w: number; h: number; label: string };
  blocks: { type: "p" | "h4" | "list" | "callout"; text?: string; items?: string[] }[];
};

export const problemTabs: ProblemTab[] = [
  {
    id: "decay",
    label: "Tooth Decay (Cavities)",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: 5 stages of tooth decay with cross-section diagram",
    },
    blocks: [
      {
        type: "p",
        text: "Tooth decay occurs when bacteria in your mouth produce acids from sugars, which slowly dissolve the hard outer layer (enamel) of your tooth. If untreated, it progresses to the softer inner layer (dentine) and eventually the nerve.",
      },
      { type: "h4", text: "Stages" },
      {
        type: "list",
        items: [
          "Stage 1 → White/brown spot on enamel (reversible with fluoride)",
          "Stage 2 → Cavity in enamel (needs filling)",
          "Stage 3 → Decay reaches dentine (filling or crown)",
          "Stage 4 → Decay reaches pulp/nerve (root canal needed)",
          "Stage 5 → Abscess / severe pain (extraction may be required)",
        ],
      },
      { type: "h4", text: "Symptoms" },
      {
        type: "p",
        text: "Tooth sensitivity to sweet/hot/cold, visible dark spots, toothache",
      },
      { type: "h4", text: "What To Do" },
      {
        type: "p",
        text: "See a dentist. Early decay = simple filling. Waiting = bigger problem.",
      },
    ],
  },
  {
    id: "gum",
    label: "Gum Disease",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: Healthy gum vs gingivitis vs periodontitis cross-section",
    },
    blocks: [
      {
        type: "p",
        text: "Gum disease (periodontal disease) is an infection of the gums and supporting bone caused by plaque buildup. It is the leading cause of tooth loss in adults.",
      },
      { type: "h4", text: "Two Stages" },
      {
        type: "list",
        items: [
          "Gingivitis (early) → Red, swollen, bleeding gums. Fully reversible with treatment.",
          "Periodontitis (advanced) → Bone and tissue loss, teeth becoming loose. Requires specialist care.",
        ],
      },
      { type: "h4", text: "Symptoms" },
      {
        type: "p",
        text: "Bleeding gums when brushing, bad breath, receding gums, loose teeth",
      },
      { type: "h4", text: "What To Do" },
      {
        type: "p",
        text: "Don't ignore bleeding gums. Professional cleaning + improved home care resolves gingivitis.",
      },
    ],
  },
  {
    id: "sensitivity",
    label: "Tooth Sensitivity",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: Why teeth become sensitive — exposed dentine diagram",
    },
    blocks: [
      {
        type: "p",
        text: "Sensitivity (dentinal hypersensitivity) occurs when the protective enamel wears down or gums recede, exposing the underlying dentine. Dentine has tiny tubes leading to the nerve, causing sharp pain with temperature or sweet stimuli.",
      },
      { type: "h4", text: "Common Causes" },
      {
        type: "list",
        items: [
          "Aggressive brushing wearing enamel",
          "Acidic food/drinks eroding enamel",
          "Gum recession exposing tooth roots",
          "Cracked teeth",
          "Teeth grinding (bruxism)",
        ],
      },
      { type: "h4", text: "What To Do" },
      {
        type: "p",
        text: "Use sensitivity toothpaste (contains potassium nitrate or stannous fluoride). See a dentist — they can apply fluoride varnish or bond the exposed area.",
      },
    ],
  },
  {
    id: "halitosis",
    label: "Bad Breath (Halitosis)",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: Sources of bad breath in the mouth",
    },
    blocks: [
      {
        type: "p",
        text: "Chronic bad breath is usually caused by bacteria in the mouth producing sulfur compounds, particularly on the tongue's surface and between teeth.",
      },
      { type: "h4", text: "Main Causes" },
      {
        type: "list",
        items: [
          "Poor oral hygiene (bacteria buildup)",
          "Gum disease",
          "Dry mouth (reduced saliva)",
          "Certain foods (onion, garlic)",
          "Dental cavities",
          "Medical conditions (less common)",
        ],
      },
      { type: "h4", text: "Key Fact" },
      {
        type: "p",
        text: "Mouthwash alone doesn't cure bad breath — it temporarily masks it. Treating the cause (poor hygiene, cavities, gum disease) is the real solution.",
      },
    ],
  },
  {
    id: "bruxism",
    label: "Teeth Grinding (Bruxism)",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: Effects of bruxism on teeth over time",
    },
    blocks: [
      {
        type: "p",
        text: "Bruxism is involuntary clenching or grinding of teeth, often during sleep. It wears down enamel, causes jaw pain (TMJ), and can crack teeth.",
      },
      { type: "h4", text: "Warning Signs" },
      {
        type: "list",
        items: [
          "Waking up with jaw pain or headaches",
          "Worn-down, flat-looking teeth",
          "Tooth sensitivity",
          "Tight or tired jaw muscles",
        ],
      },
      { type: "h4", text: "Solution" },
      {
        type: "p",
        text: "A custom night guard from your dentist protects teeth while you sleep.",
      },
    ],
  },
  {
    id: "abscess",
    label: "Tooth Abscess",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: Dental abscess location types — periapical vs periodontal",
    },
    blocks: [
      {
        type: "p",
        text: "A dental abscess is a pocket of pus caused by a bacterial infection, usually at the root of a tooth or in the gum. It is a dental emergency.",
      },
      { type: "h4", text: "Symptoms — Do Not Ignore These" },
      {
        type: "list",
        items: [
          "Severe, throbbing toothache",
          "Swelling in the cheek, jaw, or neck",
          "Fever",
          "Sensitivity to hot and cold",
          "Swollen lymph nodes",
        ],
      },
      {
        type: "callout",
        text: "An untreated abscess can spread to the jaw, neck, or even brain. If you have swelling or fever with a toothache — see a dentist immediately.",
      },
    ],
  },
  {
    id: "cracked",
    label: "Cracked / Chipped Tooth",
    infographic: {
      w: 480,
      h: 270,
      label: "Infographic: 5 types of tooth cracks illustrated",
    },
    blocks: [
      {
        type: "p",
        text: "Teeth can crack or chip from trauma, biting hard foods, or grinding. The severity determines the treatment needed.",
      },
      { type: "h4", text: "Crack Types by Severity" },
      {
        type: "list",
        items: [
          "Craze Lines → Surface only, cosmetic concern only",
          "Fractured Cusp → Piece breaks off, usually near a filling",
          "Cracked Tooth → Extends toward root — crown or root canal may be needed",
          "Split Tooth → Tooth splits into two — extraction often necessary",
          "Vertical Root Fracture → Crack starts at root — often needs extraction",
        ],
      },
    ],
  },
  {
    id: "dry",
    label: "Dry Mouth (Xerostomia)",
    infographic: { w: 480, h: 270, label: "Infographic: Saliva and oral health" },
    blocks: [
      {
        type: "p",
        text: "Dry mouth occurs when salivary glands don't produce enough saliva. Saliva is critical — it neutralizes acids, washes away food, and contains antimicrobial proteins. Without it, cavities and gum disease accelerate significantly.",
      },
      { type: "h4", text: "Common Causes" },
      {
        type: "list",
        items: [
          "Medications (antihistamines, antidepressants, blood pressure drugs)",
          "Mouth breathing",
          "Dehydration",
          "Aging",
          "Radiation therapy (head/neck area)",
        ],
      },
      { type: "h4", text: "Tips" },
      {
        type: "list",
        items: [
          "Sip water frequently",
          "Chew sugar-free gum (stimulates saliva)",
          "Avoid alcohol and caffeine",
          "Use a humidifier at night",
          "Ask your dentist about saliva substitutes",
        ],
      },
    ],
  },
];

import type { DeveloperProfile, StatusItem } from "../types";

// completed object for the simulated VsCode simulator
export const developerProfile: DeveloperProfile = {
  codename: "FullStackVet",
  location: "☕ Sipping coffee in the digital && physical realms",
  role: "Full-Stack Web, App & Software Developer",
  stack: {
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Dart",
      "php",
      "Java",
      "SQL",
    ],
    frameworks: ["ASP.NET", "Next.js", "Express.js", "TailwindCSS"],
  },
  traits: [
    "pixel-perfectionist",
    "API Whisperer",
    "Dark Mode Advocate",
    "Terminal Aesthetic Enthusiast",
  ],
  missionStatement: "Full-Stack Missions, Veteran Execution",
  availability: "Available for hire",
};

// completed object for animated status item (simulator)
export const statusItems: StatusItem[] = [
  {
    text: "Currently Developing Something Amazing",
    icon: "code",
    active: true,
  },
  { text: "Open For New Opportunities", icon: "opportunity", active: false },
  { text: "Learning New Technologies", icon: "learn", active: false },
];

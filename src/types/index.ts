// mock-vscode type (hero)
export interface DeveloperProfile {
  codename: string;
  location: string;
  role: string;
  stack: {
    languages: string[];
    frameworks: string[];
  };
  traits: string[];
  missionStatement: string;
  availability: string;
}

// animated status (hero)
export interface StatusItem {
  text: string;
  icon: string;
  active: boolean;
}

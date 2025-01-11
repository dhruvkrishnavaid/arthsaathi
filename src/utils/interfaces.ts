export interface User {
  email: string;
  password: string;
  name?: string;
  age?: number;
  income?: number;
  familySize?: number;
  married?: boolean;
  location?: string;
  educationLevel?: "Illiterate" | "Primary" | "Secondary" | "Higher Education";
  profession?: string;
  financialGoals?:
    | string[]
    | "Savings"
    | "Investment"
    | "Debt Management"
    | "Business Growth";
  riskTolerance?: "High" | "Medium" | "Low";
  currentSavings?: number;
}

export interface Meeting {
  email: string;
  description: string;
  participants?: string[];
  date?: Date;
  content?: string;
  summary?: string;
  notes?: string;
}

export interface TechStack {
  frontend:       string;
  backend:        string;
  database:       string;
  ai_layer:       string;
  infrastructure: string;
  auth?:          string;
}

export interface RoadmapPhase {
  phase: string;
  tasks: string[];
}

export interface MonetizationTier {
  name:         string;
  price:        string;
  description:  string;
  highlighted?: boolean;
}

export interface StartupScore {
  overall:              number;
  market_opportunity:   number;
  competition:          number;
  monetization:         number;
  technical_complexity: number;
}

export interface Architecture {
  product_name:   string;
  overview:       string;
  features:       string[];
  tech_stack:     TechStack;
  mvp_roadmap:    RoadmapPhase[];
  ui_screens:     string[];
  monetization:   MonetizationTier[];
  startup_score?: StartupScore;
}

export interface Project {
  id:            string;
  title:         string;
  idea:          string;
  slug:          string;
  created_at:    string;
  architecture?: Architecture;
}

export type GenerationStep = {
  id:      string;
  label:   string;
  subtext: string;
  status:  "pending" | "loading" | "done";
};

export interface GenerateResponse {
  success:      boolean;
  architecture: Architecture;
  project_id:   string;
  slug:         string;
  error?:       string;
}

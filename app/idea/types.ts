export interface Idea {
  title: string;
  description: string;
  user_flows: {
    name: string;
    steps: string[];
  }[];
  tech_stack: string[];
  milestones: {
    issues: string[];
  }[];
  future_features: string[];
  core_concepts: string[];
  readme: string;
}

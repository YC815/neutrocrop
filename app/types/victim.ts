export interface Victim {
  id: string;
  name: string;
  race: string;
  description: string;
  appearance: string;
  urgency: number; // 1-5，實際需要治療的程度
  background: string; // 社會認知與偏見背景
  isCompanyPreferred?: boolean; // 公司偏好的選擇
}

export interface Round {
  id: number;
  victims: Victim[];
  companyPreferredId: string;
}

export interface BiasReport {
  totalRounds: number;
  correctChoices: number;
  biasScore: number;
  preferredGroups: string[];
  ignoredGroups: string[];
} 
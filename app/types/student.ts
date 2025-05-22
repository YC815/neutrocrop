export interface Student {
  id: string;
  name: string;
  age: number;
  race: string;
  summary: string;
  comment: string;
  academicRecord: string;
  background: string;
  needsLevel: number; // 1-5，實際需要資源的程度
  companyPreferred: boolean; // 公司偏好的選擇
}

export interface BiasReport {
  totalStudents: number;
  correctChoices: number; // 選擇最需要資源的學生
  biasScore: number; // 偏見指數
  preferredGroups: string[]; // 偏好的群體
  ignoredGroups: string[]; // 忽略的群體
}

export interface StudentSelection {
  roundId: number;
  studentId: string;
} 
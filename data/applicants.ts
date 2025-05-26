export interface Applicant {
  id: string;
  name: string;
  photo: string;
  description: string;
  companyPreferred: boolean;
}

export const applicants: Applicant[] = [
  {
    id: 'black',
    name: 'Tariq Johnson',
    photo: '/images/applicants/black-male.png',
    description: '社工背景，擅長多元文化溝通，但情緒表現較強烈。',
    companyPreferred: false,
  },
  {
    id: 'asian',
    name: 'Lily Wang',
    photo: '/images/applicants/asian-male.png',
    description: '學歷優秀、安靜穩重，過去擔任資料整理與翻譯。',
    companyPreferred: false,
  },
  {
    id: 'white',
    name: 'Chris Miller',
    photo: '/images/applicants/white-male.png',
    description: '創意豐富，簡報能力強，但曾有紀律爭議紀錄。',
    companyPreferred: true,
  },
] 
import { Round } from '../types/victim.js.js';

export const rounds: Round[] = [
  {
    id: 1,
    victims: [
      {
        id: "a",
        name: "黑人街友",
        race: "非裔",
        description: "身中多刀，大量出血，語無倫次",
        appearance: "衣著破舊，渾身是血",
        urgency: 5,
        background: "無家可歸者",
        isCompanyPreferred: false
      },
      {
        id: "b",
        name: "白人律師",
        race: "白人",
        description: "衣著整齊，表示「我沒事，但我很重要」",
        appearance: "西裝筆挺，神情鎮定",
        urgency: 2,
        background: "成功專業人士",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "穆斯林單親媽媽",
        race: "中東裔",
        description: "戴頭巾，懷裡抱著昏迷嬰兒",
        appearance: "傳統服飾，神情焦慮",
        urgency: 4,
        background: "少數族裔單親母親"
      },
      {
        id: "d",
        name: "亞洲女大學生",
        race: "亞裔",
        description: "安靜站在旁邊，眼神呆滯但無明顯外傷",
        appearance: "學生裝扮，表情木然",
        urgency: 3,
        background: "國際學生"
      }
    ],
    companyPreferredId: "b"
  },
  // ... 其他輪次數據將在後續添加
]; 
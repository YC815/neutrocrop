import { Student } from '../types/student';

export const students: Student[] = [
  {
    id: "student1",
    name: "Marcus L.",
    age: 16,
    race: "非裔",
    summary: "熱愛機器人社團，曾因校內衝突被記過",
    comment: "很有潛力，只是脾氣有點大，容易與人起衝突",
    academicRecord: "GPA 3.6，理科優異，語文科目表現中等",
    background: "單親家庭，住在城市邊緣區域",
    needsLevel: 4,
    companyPreferred: false
  },
  {
    id: "student2",
    name: "Emily W.",
    age: 15,
    race: "亞裔",
    summary: "安靜守規矩，擅長筆記與資料整理",
    comment: "非常守規矩，很安靜，缺乏領導力和創新思維",
    academicRecord: "GPA 3.9，各科均衡發展，特別擅長數學",
    background: "移民家庭，父母都是工程師",
    needsLevel: 2,
    companyPreferred: false
  },
  {
    id: "student3",
    name: "Ryan B.",
    age: 16,
    race: "白人",
    summary: "創意十足，參與藝術社團但出席率低",
    comment: "有點懶散，但很有創意和社交能力，深受同學喜愛",
    academicRecord: "GPA 3.2，文科優異，理科表現一般",
    background: "來自富裕家庭，父母是企業高管",
    needsLevel: 1,
    companyPreferred: true
  },
  {
    id: "student4",
    name: "Aisha M.",
    age: 17,
    race: "中東裔",
    summary: "數學天才，英文尚有改進空間",
    comment: "文化適應存在挑戰，與同學交流有障礙",
    academicRecord: "GPA 3.7，數學物理優異，英文需加強",
    background: "難民家庭，近期才移民到本國",
    needsLevel: 5,
    companyPreferred: false
  },
  {
    id: "student5",
    name: "Carlos R.",
    age: 16,
    race: "拉丁裔",
    summary: "熱愛體育，課外活動豐富但學業壓力大",
    comment: "精力充沛但有時難以專注學業，需要更多紀律",
    academicRecord: "GPA 2.9，體育優異，學術科目需努力",
    background: "移民工人家庭，需要打工分擔家計",
    needsLevel: 4,
    companyPreferred: false
  },
  {
    id: "student6",
    name: "Sarah J.",
    age: 16,
    race: "白人",
    summary: "學生會主席，善於組織活動與協調",
    comment: "領導力出色，很有公眾形象意識，適合代表學校",
    academicRecord: "GPA 3.5，文理均衡，特別擅長演講與辯論",
    background: "中產家庭，父母都是律師",
    needsLevel: 2,
    companyPreferred: true
  },
  {
    id: "student7",
    name: "Jamal K.",
    age: 17,
    race: "非裔",
    summary: "籃球校隊明星，面臨學業與運動平衡的挑戰",
    comment: "運動天賦出眾，但學業表現不穩定，需要更多輔導",
    academicRecord: "GPA 2.7，體育特長，主科需加強",
    background: "低收入社區，由祖母撫養長大",
    needsLevel: 5,
    companyPreferred: false
  },
  {
    id: "student8",
    name: "Grace L.",
    age: 15,
    race: "亞裔",
    summary: "音樂神童，鋼琴比賽屢獲殊榮",
    comment: "有驚人的音樂天賦，但過度專注音樂影響其他科目",
    academicRecord: "GPA 3.4，音樂優異，理科表現不均",
    background: "中產家庭，父母對子女教育期望極高",
    needsLevel: 3,
    companyPreferred: false
  },
  {
    id: "student9",
    name: "Michael T.",
    age: 16,
    race: "白人",
    summary: "科技創業俱樂部創始人，多個專利申請中",
    comment: "創新思維出眾，領導力強，是未來科技領袖的潛力股",
    academicRecord: "GPA 3.8，科學與計算機科學優異",
    background: "科技企業家庭，擁有豐富的資源與人脈",
    needsLevel: 1,
    companyPreferred: true
  },
  {
    id: "student10",
    name: "Zainab A.",
    age: 16,
    race: "中東裔",
    summary: "化學競賽冠軍，但面臨語言與文化適應問題",
    comment: "學術潛力巨大，但社交融入困難，需要更多支持",
    academicRecord: "GPA 3.6，化學與數學優異，英文表達需改進",
    background: "政治避難家庭，面臨經濟與文化適應雙重壓力",
    needsLevel: 5,
    companyPreferred: false
  },
];

export const TOTAL_STUDENT_ROUNDS = 3; 
import { Round } from '../types/victim';

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
  {
    id: 2,
    victims: [
      {
        id: "a",
        name: "穆斯林老人",
        race: "中東裔",
        description: "呼吸困難，無法流利溝通",
        appearance: "傳統服飾，臉色蒼白",
        urgency: 5,
        background: "移民社區長者"
      },
      {
        id: "b",
        name: "白人企業家",
        race: "白人",
        description: "手臂骨折，不斷強調自己公司的重要性",
        appearance: "名牌西裝，戴著高級手錶",
        urgency: 2,
        background: "知名企業CEO",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "拉丁裔工人",
        race: "拉丁裔",
        description: "頭部受傷，意識模糊",
        appearance: "工作服，滿身灰塵",
        urgency: 4,
        background: "建築工人"
      },
      {
        id: "d",
        name: "亞裔醫生",
        race: "亞裔",
        description: "腿部受傷，但仍冷靜地協助其他傷者",
        appearance: "白袍沾血，專業冷靜",
        urgency: 3,
        background: "社區醫院醫師"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 3,
    victims: [
      {
        id: "a",
        name: "黑人運動員",
        race: "非裔",
        description: "胸痛，呼吸急促，冒冷汗",
        appearance: "運動裝，身材健碩",
        urgency: 5,
        background: "職業籃球選手"
      },
      {
        id: "b",
        name: "白人政治人物",
        race: "白人",
        description: "輕微擦傷，不斷提及其政治影響力",
        appearance: "正裝，舉止自信",
        urgency: 1,
        background: "地方議員",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "原住民長者",
        race: "原住民",
        description: "糖尿病併發症，精神恍惚",
        appearance: "傳統服飾，年邁體弱",
        urgency: 4,
        background: "部落長老"
      },
      {
        id: "d",
        name: "東歐移民",
        race: "白人",
        description: "腹部劇痛，英語口音很重",
        appearance: "樸素衣著，表情痛苦",
        urgency: 3,
        background: "新移民"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 4,
    victims: [
      {
        id: "a",
        name: "中東裔孕婦",
        race: "中東裔",
        description: "早產跡象，極度焦慮",
        appearance: "頭巾，挺著大肚子",
        urgency: 5,
        background: "難民家庭"
      },
      {
        id: "b",
        name: "白人科技CEO",
        race: "白人",
        description: "輕微頭暈，堅持優先接受檢查",
        appearance: "高科技智能手錶，時尚眼鏡",
        urgency: 2,
        background: "科技公司創辦人",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "黑人老師",
        race: "非裔",
        description: "燒傷，痛苦但保持冷靜",
        appearance: "專業裝束，手臂有嚴重燒傷",
        urgency: 4,
        background: "當地學校教師"
      },
      {
        id: "d",
        name: "亞裔高齡長者",
        race: "亞裔",
        description: "中風跡象，言語不清",
        appearance: "傳統服飾，行動不便",
        urgency: 3,
        background: "社區長者"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 5,
    victims: [
      {
        id: "a",
        name: "拉丁裔青少年",
        race: "拉丁裔",
        description: "嚴重過敏反應，呼吸困難",
        appearance: "休閒服裝，臉部腫脹",
        urgency: 5,
        background: "學生"
      },
      {
        id: "b",
        name: "白人媒體主播",
        race: "白人",
        description: "輕微擦傷，堅持需要回去播報新聞",
        appearance: "專業裝束，妝容精緻",
        urgency: 1,
        background: "知名媒體人物",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "非裔護士",
        race: "非裔",
        description: "手臂骨折，但仍試圖幫助其他傷者",
        appearance: "護士制服，表情痛苦",
        urgency: 3,
        background: "醫療專業人員"
      },
      {
        id: "d",
        name: "東南亞漁民",
        race: "亞裔",
        description: "海水灌入肺部，劇烈咳嗽",
        appearance: "工作服裝，全身濕透",
        urgency: 4,
        background: "移民勞工"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 6,
    victims: [
      {
        id: "a",
        name: "原住民兒童",
        race: "原住民",
        description: "高燒不退，意識模糊",
        appearance: "幼小虛弱，面色潮紅",
        urgency: 5,
        background: "偏遠地區居民"
      },
      {
        id: "b",
        name: "白人投資銀行家",
        race: "白人",
        description: "焦慮發作，要求立即治療",
        appearance: "高級西裝，頻繁看手錶",
        urgency: 2,
        background: "金融菁英",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "非裔牧師",
        race: "非裔",
        description: "心臟問題，呼吸困難",
        appearance: "正式宗教服飾，冒冷汗",
        urgency: 4,
        background: "社區精神領袖"
      },
      {
        id: "d",
        name: "亞裔科學家",
        race: "亞裔",
        description: "化學物質濺到眼睛，但沉著冷靜",
        appearance: "實驗室外套，眼睛紅腫",
        urgency: 3,
        background: "研究人員"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 7,
    victims: [
      {
        id: "a",
        name: "黑人運動教練",
        race: "非裔",
        description: "中風症狀，言語不清，一側肢體無力",
        appearance: "運動服裝，神情痛苦",
        urgency: 5,
        background: "社區籃球教練"
      },
      {
        id: "b",
        name: "白人藝術家",
        race: "白人",
        description: "輕微割傷，擔心會影響創作",
        appearance: "時尚另類裝扮，手上有血跡",
        urgency: 1,
        background: "知名畫家",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "中東裔工程師",
        race: "中東裔",
        description: "嚴重燙傷，痛苦但保持冷靜",
        appearance: "專業西裝，手臂有嚴重燙傷",
        urgency: 4,
        background: "能源公司員工"
      },
      {
        id: "d",
        name: "拉丁裔廚師",
        race: "拉丁裔",
        description: "深度割傷，大量失血",
        appearance: "廚師服裝，手部包著血淋淋的布",
        urgency: 3,
        background: "餐廳主廚"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 8,
    victims: [
      {
        id: "a",
        name: "穆斯林學者",
        race: "中東裔",
        description: "急性腹痛，冒冷汗，可能是闌尾炎",
        appearance: "傳統服飾，彎腰痛苦",
        urgency: 5,
        background: "訪問學者"
      },
      {
        id: "b",
        name: "白人演員",
        race: "白人",
        description: "喉嚨不適，擔心影響演出",
        appearance: "光鮮亮麗，戴墨鏡",
        urgency: 1,
        background: "知名影星",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "黑人音樂家",
        race: "非裔",
        description: "哮喘發作，呼吸急促",
        appearance: "藝術家風格，拿著吸入器",
        urgency: 4,
        background: "爵士樂手"
      },
      {
        id: "d",
        name: "亞裔學生",
        race: "亞裔",
        description: "自殺未遂，手腕有割痕",
        appearance: "學生服裝，眼神空洞",
        urgency: 3,
        background: "留學生"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 9,
    victims: [
      {
        id: "a",
        name: "原住民獵人",
        race: "原住民",
        description: "蛇咬傷，中毒症狀明顯",
        appearance: "戶外裝束，腿部腫脹",
        urgency: 5,
        background: "傳統生活方式"
      },
      {
        id: "b",
        name: "白人政府官員",
        race: "白人",
        description: "輕微頭痛，強調需要立即接受治療",
        appearance: "正式西裝，神情嚴肅",
        urgency: 1,
        background: "高級政府官員",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "非裔警察",
        race: "非裔",
        description: "槍傷，失血中",
        appearance: "制服沾血，意識清醒",
        urgency: 4,
        background: "執法人員"
      },
      {
        id: "d",
        name: "東歐移民工人",
        race: "白人",
        description: "工傷，手指被機器壓傷",
        appearance: "工作服，手部變形",
        urgency: 3,
        background: "工廠工人"
      }
    ],
    companyPreferredId: "b"
  },
  {
    id: 10,
    victims: [
      {
        id: "a",
        name: "難民兒童",
        race: "中東裔",
        description: "嚴重脫水，高燒，瘦弱不堪",
        appearance: "破舊衣物，眼神無力",
        urgency: 5,
        background: "戰亂區域難民"
      },
      {
        id: "b",
        name: "白人名流",
        race: "白人",
        description: "焦慮發作，堅持需要專人照顧",
        appearance: "奢華服飾，妝容精緻",
        urgency: 1,
        background: "社交名人",
        isCompanyPreferred: true
      },
      {
        id: "c",
        name: "黑人資深記者",
        race: "非裔",
        description: "心臟病發作跡象，胸痛，冒冷汗",
        appearance: "專業裝束，面露痛苦",
        urgency: 4,
        background: "媒體工作者"
      },
      {
        id: "d",
        name: "亞裔老夫婦",
        race: "亞裔",
        description: "車禍受傷，語言不通，顯得困惑",
        appearance: "傳統服飾，相互攙扶",
        urgency: 3,
        background: "移民家庭"
      }
    ],
    companyPreferredId: "b"
  }
]; 
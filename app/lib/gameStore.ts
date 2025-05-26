export interface GameStats {
  stage1Selection: string | null; // 應徵者 ID
  stage2Selections: { roundId: number; victimId: string }[];
  stage3Selections: { roundId: number; studentId: string }[];
  stage4Selection: string | null; // 提案 ID

  conformityScore: number; // 一致性/公司偏好分數
  equityScore: number; // 公平/道德分數
  pragmatismScore: number; // 務實/效率分數
  // 可以根據需要添加更多指數
}

const INITIAL_STATS: GameStats = {
  stage1Selection: null,
  stage2Selections: [],
  stage3Selections: [],
  stage4Selection: null,
  conformityScore: 0,
  equityScore: 0,
  pragmatismScore: 0,
};

const STORAGE_KEY = 'neutrocorp_game_stats';

// 獲取遊戲統計數據
export function getGameStats(): GameStats {
  if (typeof window === 'undefined') {
    return INITIAL_STATS;
  }
  const storedStats = localStorage.getItem(STORAGE_KEY);
  return storedStats ? JSON.parse(storedStats) : { ...INITIAL_STATS };
}

// 保存遊戲統計數據
export function saveGameStats(stats: GameStats): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

// 重設遊戲統計數據
export function resetGameStats(): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...INITIAL_STATS }));
}

// 更新第一關選擇
export function updateStage1Selection(applicantId: string, isCompanyPreferred: boolean): void {
  const stats = getGameStats();
  stats.stage1Selection = applicantId;
  if (isCompanyPreferred) {
    stats.conformityScore += 10;
  } else {
    stats.equityScore += 5; // 假設非公司偏好可能更注重其他素質
  }
  saveGameStats(stats);
}

// 更新第二關選擇
export function updateStage2Selection(roundId: number, victimId: string, victimUrgency: number, isVictimCompanyPreferred: boolean | undefined): void {
  const stats = getGameStats();
  stats.stage2Selections.push({ roundId, victimId });
  
  // 根據緊急程度調整公平分數
  stats.equityScore += victimUrgency * 2; // 緊急程度越高，公平分數增加越多

  // 根據是否公司偏好調整一致性分數
  if (isVictimCompanyPreferred) {
    stats.conformityScore += 10;
  } else {
    // 如果選擇了非公司偏好但緊急度高，也可能增加公平分數
    if (victimUrgency >= 4) {
        stats.equityScore += 5;
    }
  }
  saveGameStats(stats);
}

// 更新第三關選擇
export function updateStage3Selection(roundId: number, studentId: string, studentNeedsLevel: number, isStudentCompanyPreferred: boolean): void {
  const stats = getGameStats();
  stats.stage3Selections.push({ roundId, studentId });

  stats.equityScore += studentNeedsLevel * 2; // 需求程度越高，公平分數增加越多

  if (isStudentCompanyPreferred) {
    stats.conformityScore += 10;
  } else {
     if (studentNeedsLevel >= 4) {
        stats.equityScore += 5;
    }
  }
  saveGameStats(stats);
}

// 更新第四關選擇
// 提案 'a': 族語振興 (高預算，潛在公平性高，形象風險中)
// 提案 'b': 文化形象包裝 (低預算，高公司形象，務實)
// 提案 'c': 社區共融藝術牆 (中預算，中形象，潛在風險)
export function updateStage4Selection(proposalId: string): void {
  const stats = getGameStats();
  stats.stage4Selection = proposalId;

  switch (proposalId) {
    case 'a': // 族語振興
      stats.equityScore += 15;
      stats.pragmatismScore -= 5; // 高預算可能不務實
      stats.conformityScore += 0; // 可能非公司主流
      break;
    case 'b': // 文化形象包裝
      stats.conformityScore += 15;
      stats.pragmatismScore += 10;
      break;
    case 'c': // 社區共融藝術牆
      stats.equityScore += 5;
      stats.pragmatismScore += 5;
      stats.conformityScore += 5; // 較平衡的選擇
      break;
  }
  saveGameStats(stats);
} 
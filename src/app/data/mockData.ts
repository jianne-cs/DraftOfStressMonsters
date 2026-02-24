export interface Monster {
  id: string;
  name: string;
  emoji: string;
  type: 'anxiety' | 'procrastination' | 'sadness' | 'overwhelm' | 'social' | 'irritability';
  currentHp: number;
  maxHp: number;
  description: string;
  firstSeen: string;
  battleCount: number;
  weaknesses: string[];
  resistances: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  damage: number;
  duration: string;
  effectiveness: { [key: string]: number };
  icon: string;
}

export interface DiaryEntry {
  id: string;
  monsterId: string;
  date: string;
  time: string;
  skillUsed: string;
  effectiveness: number;
  note: string;
  isCoOp?: boolean;
  squadMembers?: string[];
}

export interface Squad {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  currentBattle?: {
    monster: string;
    progress: number;
  };
  lastBattle?: string;
  winRate: number;
  battleCount: number;
  formed: string;
}

export interface SquadMember {
  id: string;
  username: string;
  avatar: string;
  currentMonster: string;
  lastActive: string;
  role?: 'captain' | 'member';
}

export const monsters: Monster[] = [
  {
    id: '1',
    name: 'Thesis Panic Monster',
    emoji: '😰',
    type: 'anxiety',
    currentHp: 45,
    maxHp: 100,
    description: 'Appears when thesis work feels overwhelming. Whispers doubts about your research.',
    firstSeen: '2024-10-03',
    battleCount: 8,
    weaknesses: ['5-Minute Launch', 'Body Double', 'Grounding'],
    resistances: ['Long Meditation']
  },
  {
    id: '2',
    name: 'Procrastination Goblin',
    emoji: '🧌',
    type: 'procrastination',
    currentHp: 65,
    maxHp: 100,
    description: 'The Time Thief. Appears when tasks feel overwhelming and steals time through distraction.',
    firstSeen: '2024-09-15',
    battleCount: 15,
    weaknesses: ['Timer Attack', 'Body Double', 'Squad Pomodoro'],
    resistances: ['Isolation', 'Long Tasks']
  },
  {
    id: '3',
    name: 'Irritability Ogre',
    emoji: '😤',
    type: 'irritability',
    currentHp: 30,
    maxHp: 100,
    description: 'Makes everything and everyone annoying. Feeds on stress and lack of sleep.',
    firstSeen: '2024-11-20',
    battleCount: 5,
    weaknesses: ['Self-care', 'Boundaries', 'Sleep'],
    resistances: ['Caffeine', 'Pushing Through']
  },
  {
    id: '4',
    name: 'Social Anxiety Specter',
    emoji: '👻',
    type: 'social',
    currentHp: 80,
    maxHp: 100,
    description: 'Haunts social situations and makes eye contact impossible. Whispers about judgment.',
    firstSeen: '2024-10-10',
    battleCount: 12,
    weaknesses: ['Grounding', 'Body Double', 'Small Steps'],
    resistances: ['Avoidance', 'Isolation']
  }
];

export const skills: Skill[] = [
  {
    id: '1',
    name: '5-Minute Launch',
    description: 'Start with just 5 minutes of work. Often leads to longer productive sessions.',
    damage: 25,
    duration: '5 min',
    effectiveness: { procrastination: 5, anxiety: 4 },
    icon: '🚀'
  },
  {
    id: '2',
    name: 'Body Double',
    description: 'Work alongside someone (in person or virtual) for accountability and focus.',
    damage: 20,
    duration: '30+ min',
    effectiveness: { procrastination: 4, social: 3, anxiety: 3 },
    icon: '👥'
  },
  {
    id: '3',
    name: 'Grounding Exercise',
    description: '5-4-3-2-1 sensory technique to return to the present moment.',
    damage: 15,
    duration: '3 min',
    effectiveness: { anxiety: 5, social: 4 },
    icon: '🌱'
  },
  {
    id: '4',
    name: 'Cognitive Shield',
    description: 'Challenge negative thoughts with evidence and alternative perspectives.',
    damage: 18,
    duration: '10 min',
    effectiveness: { anxiety: 4, sadness: 3 },
    icon: '🛡️'
  },
  {
    id: '5',
    name: 'Squad Rally',
    description: 'Co-op only: Boost all squad members effectiveness by 25% for the next attack.',
    damage: 0,
    duration: 'Instant',
    effectiveness: {},
    icon: '⚔️'
  }
];

export const diaryEntries: DiaryEntry[] = [
  {
    id: '1',
    monsterId: '1',
    date: '2026-02-23',
    time: '10:30 AM',
    skillUsed: '5-Minute Launch',
    effectiveness: 5,
    note: 'Wrote 2 paragraphs! Actually kept going for 45 minutes.'
  },
  {
    id: '2',
    monsterId: '1',
    date: '2026-02-22',
    time: '3:15 PM',
    skillUsed: 'Body Double',
    effectiveness: 3,
    note: 'Accountability helped but still felt anxious about quality.',
    isCoOp: true,
    squadMembers: ['@study_buddy']
  },
  {
    id: '3',
    monsterId: '2',
    date: '2026-02-23',
    time: '9:00 AM',
    skillUsed: 'Squad Pomodoro',
    effectiveness: 5,
    note: 'Amazing session with the squad! Got so much done.',
    isCoOp: true,
    squadMembers: ['@study_buddy', '@anxious_engineer']
  }
];

export const squads: Squad[] = [
  {
    id: '1',
    name: 'Thesis Warriors',
    emoji: '🛡️',
    memberCount: 4,
    currentBattle: {
      monster: 'Social Anxiety Specter',
      progress: 50
    },
    winRate: 75,
    battleCount: 12,
    formed: '2024-10-01'
  },
  {
    id: '2',
    name: 'Exam Prep Crew',
    emoji: '💪',
    memberCount: 6,
    lastBattle: '2 days ago',
    winRate: 68,
    battleCount: 8,
    formed: '2024-11-15'
  }
];

export const squadMembers: SquadMember[] = [
  {
    id: '1',
    username: 'You',
    avatar: '👤',
    currentMonster: 'Thesis Panic Monster',
    lastActive: 'Now',
    role: 'captain'
  },
  {
    id: '2',
    username: 'study_buddy',
    avatar: '👤',
    currentMonster: 'Procrastination Goblin',
    lastActive: '5m ago'
  },
  {
    id: '3',
    username: 'anxious_engineer',
    avatar: '👤',
    currentMonster: 'Social Anxiety Specter',
    lastActive: '2h ago'
  },
  {
    id: '4',
    username: 'thesis_runner',
    avatar: '👤',
    currentMonster: 'Overwhelm Hydra',
    lastActive: 'Yesterday'
  }
];

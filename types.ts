export interface Character {
  id: string;
  name: string;
  hanja: string;
  role: string;
  height: string;
  appearance: string;
  mbti: string;
  personality: string;
  past: string;
  secret: string;
  themeColor: string;
  quote: string;
  normalImage: string;
  abyssImage: string;
}

export interface SystemStat {
  icon: string;
  label: string;
  desc: string;
  color: string;
}

export enum Section {
  HERO = 'hero',
  INTRO = 'intro',
  WORLD = 'world',
  CHARACTERS = 'characters',
  SYSTEM = 'system',
  ENDING = 'ending'
}
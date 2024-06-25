import { Rank } from '@/content/rank';

export type LeaderboardContentType = {
  name: string;
  rank: Rank;
  xp: number;
  isCurrent?: boolean;
};

export const LEADERBOARD_CONTENT: LeaderboardContentType[] = [
  {
    name: 'Annisa Wahyudi',
    xp: 10202,
    rank: 'legend',
  },
  {
    name: 'Arif Budi Setiawan',
    xp: 8056,
    rank: 'master',
  },
  {
    name: 'Putra Sugianto',
    xp: 6020,
    rank: 'champion',
  },
  {
    name: 'Desi Permata',
    xp: 4020,
    rank: 'guardian',
  },
  {
    name: 'Dewi Saputri Agung',
    xp: 2520,
    rank: 'guardian',
  },
  {
    name: 'Dimad Adibiarso',
    xp: 2000,
    rank: 'guardian',
  },
  {
    name: 'Putri Handayani',
    xp: 1620,
    rank: 'explorer',
  },
  {
    name: 'Reza Wahyudi',
    xp: 1400,
    rank: 'explorer',
  },
  {
    name: 'Daniella Kharisma',
    xp: 1010,
    rank: 'explorer',
  },
  {
    name: 'Ayu Ningsih Dewi',
    xp: 900,
    rank: 'explorer',
  },
  {
    name: 'Cantika Ela Agung',
    xp: 782,
    rank: 'explorer',
  },
  {
    name: 'Andika Putra',
    xp: 200,
    rank: 'novice',
  },
  {
    name: 'Ela',
    xp: 80,
    rank: 'novice',
  },
  {
    name: 'Nur Kartika Dewi',
    xp: 60,
    rank: 'novice',
  },

  {
    name: 'Dian Permata Sari',
    xp: 50,
    rank: 'novice',
  },
  {
    name: 'Maria Putra Dewi',
    xp: 45,
    rank: 'novice',
  },
  {
    name: 'Fitria Retno',
    xp: 40,
    rank: 'novice',
  },
  {
    name: 'Yunita Ayu Putri',
    xp: 30,
    rank: 'novice',
  },
  {
    name: 'Fajar Siregar',
    xp: 10,
    rank: 'novice',
  },
];

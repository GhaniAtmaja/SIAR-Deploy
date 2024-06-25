export type Rank =
  | 'novice'
  | 'explorer'
  | 'guardian'
  | 'champion'
  | 'master'
  | 'legend';

export type RankDataType = {
  [key in Rank]: {
    title: string;
    image: `/images/rank/${Rank}.svg`;
  };
};
export const RANK_DATA: RankDataType = {
  novice: {
    title: 'Novice',
    image: '/images/rank/novice.svg',
  },
  explorer: {
    title: 'Explorer',
    image: '/images/rank/explorer.svg',
  },
  guardian: {
    title: 'Guardian',
    image: '/images/rank/guardian.svg',
  },
  champion: {
    title: 'Champion',
    image: '/images/rank/champion.svg',
  },
  master: {
    title: 'Master',
    image: '/images/rank/master.svg',
  },
  legend: {
    title: 'Legend',
    image: '/images/rank/legend.svg',
  },
};

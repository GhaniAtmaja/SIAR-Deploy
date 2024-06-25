import clsx from 'clsx';
import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import NextImage from '@/components/NextImage';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

import { LeaderboardContentType } from '@/content/leaderboard';
import { RANK_DATA } from '@/content/rank';

export default function LeaderboardSection() {
  const user = useAuthStore.useUser();

  const LEADERBOARD_CONTENT: LeaderboardContentType[] = [
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
      name: user?.name ?? '',
      xp: 50,
      rank: 'novice',
      isCurrent: true,
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
  return (
    <SimpleCard className='flex flex-col w-full max-h-[30rem] md:max-h-[40rem] p-0 sm:p-0'>
      <div className='flex flex-col items-center p-6 pb-0'>
        <div className='bg-white relative  soft-shadow rounded-full w-[8rem] p-2'>
          <NextImage
            src={RANK_DATA.novice.image}
            width={242}
            height={242}
            className='w-full'
            imgClassName='w-full'
            alt={RANK_DATA.novice.title}
          />
          <Tag color='primary' className='absolute bottom-0 left-2/3'>
            <Typography variant='s1' className='text-inherit'>
              15
            </Typography>
          </Tag>
        </div>
        <div className='text-center flex flex-col gap-1 mt-2'>
          <Typography variant='s1'>{user?.name}</Typography>
          <Typography variant='s3' color='secondary'>
            <span className='text-primary-600'>10 XP</span> ke peringkat
            selanjutnya!
          </Typography>
        </div>
      </div>

      <div className='w-full h-full pt-2 flex flex-col  mt-6 overflow-y-scroll scrollbar-hide'>
        {LEADERBOARD_CONTENT.map((leaderboard, i) => (
          <LeaderboardListItem key={i} data={leaderboard} order={i + 1} />
        ))}
      </div>
    </SimpleCard>
  );
}

function LeaderboardListItem({
  data,
  order,
}: {
  data: LeaderboardContentType;
  order: number;
}) {
  return (
    <div
      className={clsx([
        'flex group px-6 items-center justify-between gap-4 py-2',
        data.isCurrent && 'bg-primary-100',
      ])}
    >
      <div className='flex items-center gap-4'>
        <div className='relative w-12 h-12 overflow-hidden'>
          <NextImage
            src={RANK_DATA[data.rank].image}
            width={242}
            height={242}
            className='absolute inset-0 w-full'
            imgClassName='w-full'
            alt={RANK_DATA[data.rank].title}
          />
          {(order <= 3 || data.isCurrent) && (
            <Typography
              variant='c2'
              className='absolute w-4 h-4 inline-flex items-center justify-center rounded-full bottom-0 left-0 bg-typo text-primary-50 font-semibold'
            >
              {order}
            </Typography>
          )}
        </div>
        <div>
          <Typography variant='s3'>{data.name}</Typography>
          <Typography variant='c1' color='secondary'>
            {RANK_DATA[data.rank].title}
          </Typography>
        </div>
      </div>
      <Typography variant='s3' color='secondary'>
        {data.xp.toLocaleString('ID')} XP
      </Typography>
    </div>
  );
}

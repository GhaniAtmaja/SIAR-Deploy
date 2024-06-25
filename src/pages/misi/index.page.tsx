import clsx from 'clsx';
import * as React from 'react';

import { getPercentage } from '@/lib/helper';

import SimpleCard from '@/components/cards/SimpleCard';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Tag from '@/components/tag/Tag';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';
import Typography from '@/components/typography/Typography';

import { MISSION_CONTENT } from '@/content/misi';

export default withAuth('optional')(DashboardPage);
function DashboardPage() {
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Dashboard' />

      <main className='py-12 flex flex-col gap-8 '>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/misi']}
        >
          <PageHeader.Title>Misi Anda</PageHeader.Title>
        </PageHeader>

        <section className='dashboard-layout gap-2 flex flex-col z-10 justify-between'>
          <div className='mt-2 inline-flex items-center gap-1'>
            <Tag color='primary'>
              {
                MISSION_CONTENT.filter((mission) => mission.percentage === 100)
                  .length
              }
            </Tag>{' '}
            <Typography variant='b3' color='secondary'>
              / 6 misi selesai
            </Typography>
          </div>
          <div className='w-full min-w-[12rem] max-w-md relative h-4 overflow-hidden rounded-full bg-white shadow-inner'>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className={clsx([
                      'bg-gradient-to-r from-primary-400 to-primary-700',
                      'absolute left-0 h-4 shrink-0 rounded-r-full',
                    ])}
                    style={{
                      width: `${getPercentage(4, 6)}%`,
                    }}
                  >
                    &nbsp;
                  </span>
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                  <Typography variant='c1'>4 misi diselesaikan</Typography>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        <section className='dashboard-layout gap-6 z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {MISSION_CONTENT.map((data, i) => (
            <SimpleCard
              size='sm'
              key={i}
              className=' flex flex-col gap-4 justify-start'
            >
              <NextImage
                src={data.image}
                alt='Misi'
                layout='fill'
                className='w-full aspect-video relative rounded-xl overflow-hidden'
                imgClassName='w-full object-cover'
              />
              <div className='space-y-2'>
                <Typography variant='s2'>{data.title}</Typography>
                <Typography variant='c1' color='secondary'>
                  {data.description}
                </Typography>
              </div>
              <div className='flex items-center gap-3 mt-auto'>
                <div className='w-full relative h-2 overflow-hidden rounded-full bg-light shadow-inner'>
                  <span
                    title='2500'
                    className={clsx([
                      data.percentage === 100
                        ? 'bg-green-400 '
                        : 'bg-secondary-400 ',
                      'absolute left-0 h-2 shrink-0 rounded-r-full',
                    ])}
                    style={{
                      width: `${getPercentage(data.percentage, 100)}%`,
                    }}
                  >
                    &nbsp;
                  </span>
                </div>
                <Typography
                  variant='c1'
                  color='secondary'
                  className='whitespace-nowrap'
                >
                  {data.percentage === 100 ? 'selesai' : `${data.percentage}%`}
                </Typography>
              </div>
            </SimpleCard>
          ))}
        </section>

        <div
          className='absolute inset-0 opacity-50'
          style={{
            backgroundImage: 'url("/images/background/grid.png")',
          }}
        >
          <div className='from-transparent to-light absolute inset-0 bg-gradient-to-b  bg-repeat' />
        </div>
      </main>
    </DashboardLayout>
  );
}

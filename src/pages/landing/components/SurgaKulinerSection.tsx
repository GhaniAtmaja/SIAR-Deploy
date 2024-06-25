import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import IconLink from '@/components/links/IconLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function SurgaKulinerSection() {
  return (
    <SimpleCard className='aspect-[3/4] shrink-0 p-0 sm:p-0 overflow-hidden group relative'>
      <div
        className={clsx([
          'absolute inset-x-0 bottom-0 h-1/2  z-10',
          'bg-gradient-to-b from-transparent to-black/70 p-8 flex items-end justify-between',
        ])}
      >
        <div>
          <Typography
            variant='c1'
            className='uppercase tracking-wide text-white/70'
          >
            Telusuri
          </Typography>
          <Typography variant='s1' className='text-white'>
            Surga Kuliner
          </Typography>
        </div>
        <IconLink
          href='/surga'
          variant='outline'
          className='text-white hover:text-typo'
          icon={ChevronRight}
        />
      </div>
      <NextImage
        src='images/dashboard/surga-kuliner.svg'
        width={600}
        height={800}
        className='w-full group-hover:scale-105 origin-bottom select-none pointer-events-none transition-transform duration-300 ease-out'
        imgClassName='w-full'
        alt='Surga Kuliner'
      />
    </SimpleCard>
  );
}

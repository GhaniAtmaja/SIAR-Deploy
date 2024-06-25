import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import { AjuanDataType } from '@/content/ajuan';
import RewardModal from '@/pages/pendampingan/components/RewardModal';

export default function ShopDetailCard({ data }: { data: AjuanDataType }) {
  return (
    <SimpleCard className='dashboard-layout flex flex-col md:flex-row gap-6'>
      <NextImage
        src={data.image}
        alt={data.nama}
        layout='fill'
        className='shrink-0 aspect-video w-full md:w-1/5 relative rounded-xl overflow-hidden'
        imgClassName='w-full object-cover'
      />
      <div className='w-full flex flex-col gap-3'>
        <div className='space-y-1'>
          <Typography variant='h3'>
            {'Sertifikasi Halal ' + data.nama}
          </Typography>

          <Typography variant='b3' color='secondary'>
            {data.address}
          </Typography>
        </div>

        <RewardModal data={data}>
          {({ openModal }) => (
            <div
              onClick={() => data.status === 'completed' && openModal()}
              className='flex mt-auto gap-8 items-center'
            >
              <div className='flex items-center gap-2'>
                <div className='p-2 bg-white shadow rounded-full'>
                  <NextImage
                    src='/images/icon/koin-sip.png'
                    width={120}
                    height={120}
                    className='w-5'
                    imgClassName='w-full'
                    alt='Koin SIP'
                  />
                </div>
                <div>
                  <Typography variant='c1' className='whitespace-nowrap'>
                    Koin SIP
                  </Typography>
                  <Typography variant='s2'>{data.koinReward}</Typography>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='p-2 bg-white shadow rounded-full inline-flex items-center justify-center'>
                  <div className='text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-800 font-bold w-5 h-5 c1 inline-flex items-center justify-center'>
                    XP
                  </div>
                </div>
                <div>
                  <Typography variant='c1' className='whitespace-nowrap'>
                    XP
                  </Typography>
                  <Typography variant='s2'>{data.xpReward}</Typography>
                </div>
              </div>
            </div>
          )}
        </RewardModal>
      </div>
    </SimpleCard>
  );
}

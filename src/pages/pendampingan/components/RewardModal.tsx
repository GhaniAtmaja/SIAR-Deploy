import * as React from 'react';

import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import { LOCALE } from '@/constant/common';
import { AjuanDataType } from '@/content/ajuan';

type ModalReturnType = {
  openModal: () => void;
};

export default function RewardModal({
  children,
  data,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  data: AjuanDataType;
}) {
  const [open, setOpen] = React.useState(
    data.status === 'completed' ? true : false,
  );
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title='Hadiah 🎁🎁'
        childrenClassName='divide-y-0'
      >
        <Modal.Section className='text-center bg-gradient-to-br from-primary-50 to-primary-100'>
          <div className='grid gap-12 md:gap-0 md:grid-cols-2'>
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
              <div className='p-2 bg-white soft-shadow rounded-full'>
                <NextImage
                  src='/images/icon/koin-sip.png'
                  width={120}
                  height={120}
                  className='w-12'
                  imgClassName='w-full'
                  alt='Koin SIP'
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Typography variant='b3' className='whitespace-nowrap '>
                  Koin SIP
                </Typography>
                <Typography variant='h4' className=''>
                  {data.koinReward.toLocaleString(LOCALE)}
                </Typography>
              </div>
            </div>
            <div className='flex flex-col w-full  items-center justify-center gap-2'>
              <div className='p-2 bg-white soft-shadow rounded-full'>
                <div className='text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-800 font-bold w-12 h-12 h1 inline-flex items-center justify-center'>
                  XP
                </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Typography variant='b3' className='whitespace-nowrap '>
                  XP
                </Typography>
                <Typography variant='h4' className=''>
                  {data.xpReward}
                </Typography>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-12 md:-mt-[10%]'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <div className='p-2 bg-white soft-shadow rounded-full'>
                <NextImage
                  src='/tiles/tile-38.png'
                  width={100}
                  height={80}
                  className='w-12 h-12 relative'
                  imgClassName='w-full absolute inset-0 top-1/2 -translate-y-1/2'
                  alt='Koin SIP'
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Typography variant='b3' className='whitespace-nowrap '>
                  Kios
                </Typography>
                <Typography variant='h4' className=' truncate'>
                  {data.nama}
                </Typography>
              </div>
            </div>
          </div>
        </Modal.Section>

        <Modal.Section></Modal.Section>
      </Modal>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Info, User } from 'lucide-react';
import * as React from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useDraggable } from 'react-use-draggable-scroll';

import { getPercentage } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

import { RANK_DATA } from '@/content/rank';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const userNavigation = [
  { name: 'Ubah Password', href: '' },
  { name: 'Ubah Profil', href: '' },
];

export default function Header({ setSidebarOpen }: HeaderProps) {
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();
  return (
    <div className='sticky top-0 z-20 bg-white shadow'>
      <div className='dashboard-layout relative z-10'>
        <div className='flex  flex-shrink-0 py-2 min-h-[4rem]'>
          <button
            type='button'
            className={clsx([
              '-ml-4 px-4',
              'border-r border-gray-200 text-gray-500 md:hidden',
              'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
            ])}
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <HiOutlineMenuAlt2 className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 items-center justify-between '>
            <div className=' flex-1 px-2 md:px-0  flex'>
              <Typography variant='b3' color='secondary'>
                {format(new Date(), 'PPPP', {
                  locale: id,
                })}
              </Typography>
            </div>

            {/* Level and XP Bar */}
            <GamificationModal>
              {({ openModal }) => (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={openModal}
                        className={clsx([
                          'border border-typo-outline bg-white hover:bg-gray-50 px-5 py-1 rounded-full',
                          'flex items-center gap-4',
                        ])}
                      >
                        <div className='hidden md:flex flex-col gap-0.5'>
                          <div className='flex justify-between items-center'>
                            <Typography
                              variant='s3'
                              className='text-primary-600'
                            >
                              Level 1
                            </Typography>
                            <Typography variant='s3' color='secondary'>
                              <span className='text-yellow-500'>
                                + 50 SIP Koin
                              </span>{' '}
                              di Level 2
                            </Typography>
                          </div>
                          <div className='flex items-center gap-3'>
                            <Typography variant='c1' color='secondary'>
                              XP
                            </Typography>
                            <div className='w-full min-w-[12rem] relative h-2 overflow-hidden rounded-full bg-light shadow-inner'>
                              <span
                                title='50'
                                className={clsx([
                                  'bg-gradient-to-r from-primary-400 to-primary-700',
                                  'absolute left-0 h-2 shrink-0 rounded-r-full',
                                ])}
                                style={{
                                  width: `${getPercentage(50, 80)}%`,
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
                              50 / 80
                            </Typography>
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <div className='p-0.5 bg-white shadow rounded-full'>
                            <NextImage
                              src='/images/icon/koin-sip.png'
                              width={120}
                              height={120}
                              className='w-4'
                              imgClassName='w-full'
                              alt='Koin SIP'
                            />
                          </div>
                          <Typography variant='s2'>1.100</Typography>
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Typography variant='c1'>
                        Klik untuk melihat lebih detail
                      </Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </GamificationModal>

            <div className='flex items-center  md:ml-6'>
              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3 '>
                <div>
                  <Menu.Button
                    data-cy='user-menu'
                    className={clsx([
                      '-mr-2 flex max-w-xs items-center gap-4 rounded-md bg-white px-0.5 py-1 text-sm',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    ])}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <div className='hidden min-w-0  flex-col items-end sm:flex'>
                      <Typography variant='b2'>{user?.name}</Typography>
                      <Typography variant='b3'>@{user?.username}</Typography>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-50'>
                      <User className='text-primary-600' />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <UnstyledLink
                            href={item.href}
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            {item.name}
                          </UnstyledLink>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          data-cy='logout'
                          className={clsx(
                            active ? 'bg-gray-100' : '',
                            'block w-full px-4 py-2 text-left text-sm text-gray-700',
                          )}
                        >
                          Keluar
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ModalReturnType = {
  openModal: () => void;
};

function GamificationModal({
  children,
}: {
  children: (props: ModalReturnType) => JSX.Element;
}) {
  const user = useAuthStore.useUser();
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title=''
        childrenClassName='divide-y-0'
      >
        <Modal.Section className='py-1 sm:py-1'>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='bg-white  absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 soft-shadow rounded-full p-3 mx-auto w-[8rem]'>
                  <NextImage
                    src={RANK_DATA.novice.image}
                    width={242}
                    height={242}
                    className='w-full'
                    imgClassName='w-full'
                    alt={RANK_DATA.novice.title}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side='left'>
                <Typography variant='c1'>
                  Rank Kamu{' '}
                  <span className='text-primary-600'>
                    {RANK_DATA.novice.title}
                  </span>
                </Typography>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className='text-center flex flex-col justify-center items-center'>
            <Typography as='h3' variant='h3'>
              {user?.name}
            </Typography>
            <div className='flex gap-2 justify-center items-center'>
              <div className='bg-primary-900 px-3 py-0.5 rounded-full'>
                <Typography variant='s3' className='text-white'>
                  {RANK_DATA.novice.title}
                </Typography>
              </div>
              <Typography variant='s3' color='secondary'>
                <span className='text-primary-600'>8 Level</span> lagi menuju{' '}
                {RANK_DATA.explorer.title}
              </Typography>
            </div>
          </div>
          <div className='w-full flex flex-col gap-0.5 mt-8 md:mt-4'>
            <div className='flex justify-between items-center'>
              <Typography variant='s3' className='text-primary-600'>
                Level 1
              </Typography>
              <Typography variant='s3' color='secondary'>
                <span className='text-yellow-500'>+ 50 SIP Koin</span> di Level
                2
              </Typography>
            </div>
            <div className='flex items-center gap-3'>
              <Typography variant='c1' color='secondary'>
                XP
              </Typography>
              <div className='w-full min-w-[12rem] relative h-2 overflow-hidden rounded-full bg-light shadow-inner'>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        className={clsx([
                          'bg-gradient-to-r from-primary-400 to-primary-700',
                          'absolute left-0 h-2 shrink-0 rounded-r-full',
                        ])}
                        style={{
                          width: `${getPercentage(50, 80)}%`,
                        }}
                      >
                        &nbsp;
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side='bottom'>
                      <Typography variant='c1'>50 XP</Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Typography
                variant='c1'
                color='secondary'
                className='whitespace-nowrap'
              >
                <span className='text-primary-600'>50</span> / 80
              </Typography>
            </div>
          </div>
          <div className='flex gap-8 md:justify-end items-start mt-8  md:mt-4'>
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
                <Typography variant='s2'>1.100</Typography>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='p-2 bg-white shadow rounded-full'>
                <NextImage
                  src='/images/icon/kios.png'
                  width={120}
                  height={120}
                  className='w-5'
                  imgClassName='w-full'
                  alt='Kios'
                />
              </div>
              <div>
                <Typography variant='c1' className='whitespace-nowrap'>
                  Banyak Kios
                </Typography>
                <Typography variant='s2'>2</Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-8 md:mt-0'>
            <Typography variant='c1'>Badges Kamu</Typography>
            <BadgesCarousel />
          </div>
          <div className='flex justify-end'>
            <Button onClick={() => setOpen(false)} className='translate-y-1/2'>
              Tutup
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}

const SAMPLE_BADGE_IMAGE = [
  {
    url: '/images/badge/gold.jpg',
    isActive: true,
  },
  {
    url: '/images/badge/silver.jpg',
    isActive: true,
  },
  {
    url: '/images/badge/silver.jpg',
    isActive: false,
  },
  {
    url: '/images/badge/silver.jpg',
    isActive: false,
  },
  {
    url: '/images/badge/silver.jpg',
    isActive: false,
  },
];

function BadgesCarousel() {
  //#region  //*=========== Drag ===========
  const element =
    React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events: scrollEvent } = useDraggable(element, {
    applyRubberBandEffect: true,
  });
  //#endregion  //*======== Drag ===========

  return (
    <div
      className={clsx([
        'scrollbar-hide overflow-x-scroll cursor-grab',
        'flex items-center gap-4 ',
        'p-3 bg-gray-50 rounded-3xl',
      ])}
      {...scrollEvent}
      ref={element}
    >
      {SAMPLE_BADGE_IMAGE.map((image, i) => (
        <div
          key={i}
          className={clsx([
            'relative shadow-md aspect-[4/6] min-w-[40%] md:min-w-[20%] rounded-2xl overflow-hidden',
          ])}
        >
          <NextImage
            src={image.url}
            layout='fill'
            sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw'
            alt='Badge'
            className={clsx([
              'absolute inset-0 w-full',
              !image.isActive && 'blur-sm',
            ])}
            imgClassName='object-cover w-full h-full'
          />
          {!image.isActive && (
            <Popover>
              <PopoverTrigger
                asChild
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              >
                <IconButton
                  variant='outline'
                  size='sm'
                  className='rounded-full'
                  icon={Info}
                />
              </PopoverTrigger>
              <PopoverContent className='w-fit p-2'>
                <Typography variant='c1'>
                  Misi{' '}
                  <span className='text-primary-600'>
                    Membantu 10 UMKM Roti
                  </span>
                </Typography>
              </PopoverContent>
            </Popover>
          )}
        </div>
      ))}
    </div>
  );
}

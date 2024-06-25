import clsx from 'clsx';
import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

type OptionType = {
  title: string;
  color?: string;
};
//#region  //*=========== Constant ===========
const RARITY_OPTIONS: OptionType[] = [
  {
    title: 'Biasa',
    color: 'bg-black',
  },
  {
    title: 'Tidak Biasa',
    color: 'bg-green-500',
  },
  {
    title: 'Langka',
    color: 'bg-cyan-500',
  },
  {
    title: 'Unik',
    color: 'bg-purple-500',
  },
  {
    title: 'Legenda',
    color: 'bg-orange-500',
  },
  {
    title: 'Mistik',
    color: 'bg-red-500',
  },
];

const TYPE_OPTIONS: OptionType[] = [
  {
    title: 'Lahan',
  },
  {
    title: 'Bangunan',
  },
];

const OPTIONS = [
  <FilterSelection title='Semua' key='all' />,

  RARITY_OPTIONS.map((rarity, i) => (
    <FilterSelection key={i} title={rarity.title} color={rarity.color} />
  )),

  TYPE_OPTIONS.map((type, i) => <FilterSelection key={i} title={type.title} />),
];

const ORNAMENTS = [
  {
    image: '/tiles/tile-1.png',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '1',
  },
  {
    image: '/tiles/tile-43.png',
    color: 'rare',
    name: 'Peti',
    amount: 'x1',
    price: '10',
    id: '2',
  },
  {
    image: '/tiles/tile-40.png',
    color: 'unique',
    name: 'Tong',
    amount: 'x1',
    price: '10',
    id: '3',
  },
  {
    image: '/tiles/tile-49.png',
    color: 'uncommon',
    name: 'Tangga',
    amount: 'x1',
    price: '10',
    id: '4',
  },
  {
    image: '/tiles/tile-42.png',
    color: 'legend',
    name: 'Orc',
    amount: 'x1',
    price: '10',
    id: '5',
  },
  {
    image: '/tiles/tile-41.png',
    color: 'legend',
    name: 'Manusia',
    amount: 'x1',
    price: '10',
    id: '6',
  },
  {
    image: '/tiles/tile-52.png',
    color: 'rare',
    name: 'Tower',
    amount: 'x1',
    price: '10',
    id: '7',
  },
  {
    image: '/tiles/tile-44.png',
    color: 'rare',
    name: 'Pilar',
    amount: 'x1',
    price: '10',
    id: '8',
  },
  {
    image: '/tiles/tile-39.png',
    color: 'unique',
    name: 'Banner',
    amount: 'x1',
    price: '10',
    id: '9',
  },
  {
    image: '/tiles/tile-51.png',
    color: 'common',
    name: 'Duri',
    amount: 'x1',
    price: '10',
    id: '10',
  },
];
//#endregion  //*======== Constant ===========

export default function CobapagePage() {
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Coba.page' />

      <main className='py-12 flex flex-col'>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/toko']}
        >
          <PageHeader.Title>Toko Ornamen</PageHeader.Title>
        </PageHeader>

        <div className='flex dashboard-layout z-10 flex-col gap-4'>
          {OPTIONS.map((option, i) => (
            <div
              key={i}
              className='flex layout items-center justify-center gap-4'
            >
              {option}
            </div>
          ))}

          <div className='layout gap-4 grid md:grid-cols-3 lg:grid-cols-5'>
            {ORNAMENTS.map((ornament, i) => (
              <OrnamentDisplay key={i} {...ornament} />
            ))}
          </div>
          {/* 
          <div className=''>
            <Typography variant='s3' className='text-center grid-flow-col'>
              <Button variant='outline' size='base'>
                {'<'}
              </Button>
              <Button variant='outline' size='base'>
                {'>'}
              </Button>
            </Typography>
            <Typography variant='s3' className='text-center'>
              1 - 10 of 36 <br />
              Ornament per page:{' '}
              <b>
                <u>10</u>
              </b>
          
              <b>15</b> <b>20</b>
            </Typography>
          </div> */}
          {/* <Typography variant='s3' className='text padding-lihat ml-4'>
            LIHAT LAINNYA
          </Typography>
          <ButtonLink
            href='/coba'
            variant='ghost'
            className='shadow rounded-xl w-40 ml-4'
          >
            <Typography variant='h3' className='text-center'>
              <NextImage
                className='flex'
                src='/images/ornamen/StoreIcon.png'
                alt='ornamen'
                width={25}
                height={25}
              />
              Ornamen Tersedia
            </Typography>
          </ButtonLink> */}
        </div>

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
// 1
function FilterSelection({ title, color }: { title: string; color?: string }) {
  return (
    <div className='flex items-center gap-1'>
      <input type='checkbox' className='round round shadow-lg' />
      {color && <div className={clsx(['w-4 h-4 rounded-full', color])}></div>}
      <Typography variant='s3'>{title}</Typography>
    </div>
  );
}

function OrnamentDisplay({
  image,
  color,
  name,

  price,
  id,
}: {
  image: string;
  color: string;
  name: string;

  price: string;
  id: string;
}) {
  return (
    <UnstyledLink href={id == '1' ? `/purchaseornamen/${id}` : ``}>
      <SimpleCard className='flex relative flex-col items-center h-full'>
        <NextImage src={image} width='100' height='100' alt='ornamen' />
        <div
          className={clsx([
            'w-4 h-4 rounded-full absolute top-3 right-3',
            color,
          ])}
        />

        <div className='flex mt-auto items-center justify-between w-full'>
          <Typography variant='s1' className='text category numgrid'>
            {name}
          </Typography>
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
            <Typography variant='s2'>{price}</Typography>
          </div>
        </div>
      </SimpleCard>
    </UnstyledLink>
  );
}

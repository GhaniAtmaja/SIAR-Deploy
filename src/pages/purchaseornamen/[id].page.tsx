import * as React from 'react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const ORNAMENTS = [
  {
    image: '/tiles/tile-1.png',
    amount: '10',
    id: '1',
  },
  {
    image: '/tiles/tile-2.png',
    amount: '10',
    id: '2',
  },
  {
    image: '/tiles/tile-3.png',
    amount: '10',
    id: '3',
  },
  {
    image: '/tiles/tile-4.png',
    amount: '10',
    id: '4',
  },
  {
    image: '/tiles/tile-5.png',
    amount: '10',
    id: '5',
  },
  {
    image: '/tiles/tile-6.png',
    amount: '10',
    id: '6',
  },
  {
    image: '/tiles/tile-7.png',
    amount: '10',
    id: '7',
  },
  {
    image: '/tiles/tile-8.png',
    amount: '10',
    id: '8',
  },
  {
    image: '/tiles/tile-9.png',
    amount: '10',
    id: '9',
  },
  {
    image: '/tiles/tile-10.png',
    amount: '10',
    id: '10',
  },
  {
    image: '/tiles/tile-11.png',
    amount: '10',
    id: '11',
  },
];

export default function CobapagePage() {
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <DashboardLayout>
      <Seo templateTitle='Coba.page' />
      <main>
        <div className='background-purchase layout border border-spacing-5'>
          <div className='flex flex-col gap-4'>
            {/* {JSON.stringify(data)}*/}
            <Typography variant='j2' className='text ml-8'>
              Toko Ornamen
            </Typography>
            <Typography variant='h3' className='text ml-4'>
              List ornamen yang dijual
            </Typography>

            <Typography variant='h6' className='text details'>
              KOIN ANDA SAAT INI
            </Typography>
            <Typography variant='s1' className='coin ml-4'>
              1000
            </Typography>
            <div className='flex flex-row self-center item-center gap-3 layout'>
              <div className='rounded-xl border shadow-lg flex flex-col self-center items-center'>
                <NextImage
                  src='/tiles/tile-1.png'
                  width='100'
                  height='100'
                  alt='ornamen'
                  className='rounded-t-lg'
                />
                <Typography variant='b2' className='text'>
                  <div className='circle common' />
                  Rumput
                </Typography>
                <Typography variant='b1' className='text '>
                  x1
                </Typography>
              </div>
              <div className='flex items-center justify-center'>
                <Typography variant='s2' className='flex flex-col self-center '>
                  <ul>
                    <li>Tipe Ornamen :</li>
                    <li>Jumlah Paket :</li>
                    <li>Kelangkaan :</li>
                    <li>Harga Paket :</li>
                  </ul>
                </Typography>
              </div>
              <div className='flex items-center justify-center'>
                <Typography variant='s2' className='text category numgrid'>
                  <ul>
                    <li>Lahan</li>
                    <li>11</li>
                    <li>Biasa</li>
                    <li className='coin'>10 KOIN</li>
                  </ul>
                </Typography>
              </div>
              <div className=''>
                <div className='gap-4 grid grid-cols-5 items-center justify-center'>
                  {ORNAMENTS.map((ornament, i) => (
                    <OrnamentDisplay key={i} {...ornament} />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center gap-x-40'>
              <ButtonLink className='confirm w-3/12 h-5/6' href='/invoice'>
                <Typography variant='s1' className='ctext'>
                  <NextImage
                    src='/images/ornamen/check_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></NextImage>
                  Beli
                </Typography>
              </ButtonLink>
              <ButtonLink
                className='cancel w-3/12 h-5/6'
                href='/purchaseornamen'
              >
                <Typography variant='s1' className='ctext'>
                  <NextImage
                    src='/images/ornamen/cross_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></NextImage>
                  Batal
                </Typography>
              </ButtonLink>
            </div>
            <Typography variant='s3' className='ml-4'>
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
            </ButtonLink>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

function OrnamentDisplay({
  image,
  amount,
  id,
}: {
  image: string;
  amount: string;
  id: string;
}) {
  return (
    <div className='rounded-xl border border-typo-outline shadow-lg flex flex-col'>
      <NextImage
        src={image}
        width='100'
        height='100'
        alt='ornamen'
        className='rounded-t-lg'
        id={id}
      />
      <Typography variant='b1' className='text category numgrid text-center'>
        x{amount}
      </Typography>
    </div>
  );
}

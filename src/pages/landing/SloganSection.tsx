import { PlayCircle } from 'lucide-react';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function SloganSection() {
  return (
    <section className=' bg-gray-50 relative flex flex-col overflow-hidden'>
      <div className='layout z-10'>
        <div className='flex flex-col items-start gap-4 py-20 w-full md:w-1/2'>
          <Typography as='h1' variant='j2'>
            Siap menjadi Pahlawan SIP dan mengubah dunia kuliner?
          </Typography>
          <Typography variant='b1' color='secondary'>
            Mulai Petualangan Anda Sekarang!
          </Typography>
          <div className='animate-bounce'>
            <ButtonLink href='#' rightIcon={PlayCircle}>
              Mulai Sekarang
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className='absolute inset-0'>
        <NextImage
          src='/images/landing/makanan.png'
          width={1080}
          height={607.9}
          alt='Makanan'
          className='w-full  md:w-1/2 absolute right-0 bottom-0 top-auto md:top-0 -scale-y-100 md:scale-y-100 opacity-20 md:opacity-100'
          imgClassName='w-full'
        />
        <div className='w-full md:w-1/2 bg-gradient-to-b  md:bg-gradient-to-r  absolute inset-y-0 right-0 from-gray-50 to-transparent via-gray-50 md:via-gray-50/50'></div>
      </div>
    </section>
  );
}

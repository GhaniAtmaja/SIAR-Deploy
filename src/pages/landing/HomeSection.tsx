import { BookOpen, PlayCircle } from 'lucide-react';
import * as React from 'react';
import { Reveal, Tween } from 'react-gsap';
import { Parallax } from 'react-scroll-parallax';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function HomeSection() {
  return (
    <section
      className='relative flex overflow-hidden bg-cover bg-no-repeat bg-bottom'
      style={{ backgroundImage: "url('/images/landing/map.jpg')" }}
    >
      <div className='layout py-20 min-h-main z-10 flex flex-col justify-center gap-10 text-center items-center'>
        <div className='relative'>
          <Reveal>
            <Typography
              as='h1'
              variant='j1'
              className='text-primary-950 tracking-wide relative'
            >
              <Tween
                from={{
                  y: '50px',
                  opacity: 0,
                }}
                to={{
                  y: 0,
                  opacity: 1,
                }}
                duration={1.2}
                stagger={0.2}
                ease='power2.out'
              >
                <span className='relative'>
                  Sertifikasi Halal
                  <NextImage
                    src='/images/landing/es-teh.png'
                    width={360}
                    height={360}
                    className='absolute left-0 top-0 w-16 md:w-1/4  pointer-events-none select-none rotate-[30deg] -translate-y-1/2 -translate-x-[80%] md:-translate-x-full'
                    imgClassName='animate-[float_50s_ease-out_infinite] w-full'
                    alt='Es Teh'
                  />
                </span>
                <br />
                <span>kini lebih</span>
                <br />
                <span className='relative bg-primary-200'>
                  mudah dan seru
                  <NextImage
                    src='/images/landing/mie-ayam.png'
                    width={360}
                    height={360}
                    className='absolute right-0 bottom-0  w-16 md:w-1/4 pointer-events-none select-none rotate-[2.5deg] translate-y-1/2 translate-x-full'
                    imgClassName='animate-[float-reverse_50s_ease-out_infinite] w-full'
                    alt='Mie Ayam'
                  />
                </span>
              </Tween>
            </Typography>
          </Reveal>

          <Parallax
            translateX={['-60px', '60px']}
            className='absolute left-1/2 md:left-[80%] top-0 w-2/3 opacity-80 blur-sm pointer-events-none select-none'
          >
            <NextImage
              src='/images/landing/cloud-1.png'
              width={270}
              height={140}
              className='w-full'
              imgClassName='w-full -translate-y-1/2 '
              alt='Awan'
            />
          </Parallax>
          <Parallax
            translateX={['100px', '-100px']}
            className='absolute right-1/2 md:right-[80%] bottom-0 w-2/3 opacity-80 blur-md pointer-events-none select-none'
          >
            <NextImage
              src='/images/landing/cloud-2.png'
              width={270}
              height={140}
              className='w-full'
              imgClassName='w-full translate-y-1/2 '
              alt='Awan'
            />
          </Parallax>
        </div>

        <Typography variant='s1' color='secondary' className='max-w-lg'>
          Bergabunglah dengan Pahlawan SIP, Lawan Kabut Jahat Syubhat dan Bangun
          Dunia Kuliner yang Halal dan Bersih!
        </Typography>

        <div className='flex flex-wrap gap-y-2 justify-center gap-x-5 items-center'>
          <div className='animate-bounce'>
            <ButtonLink href='https://its.id/fafifedemo' rightIcon={PlayCircle}>
              Mulai Sekarang
            </ButtonLink>
          </div>
          <UnderlineLink
            href='/bantuan'
            className='gap-2.5 text-sm md:text-base'
          >
            <BookOpen size='1em' />
            Pelajari Lebih Lanjut
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}

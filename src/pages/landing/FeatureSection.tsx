import * as React from 'react';
import { Reveal, Tween } from 'react-gsap';
import { Parallax } from 'react-scroll-parallax';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
export default function FeatureSection() {
  return (
    <>
      <section
        id='fitur'
        className='min-h-main bg-white overflow-hidden flex flex-col gap-32 md:gap-4'
      >
        <div className='flex flex-col-reverse md:flex-row gap-10 layout z-10 pt-20'>
          <div className='w-full md:w-1/2 shrink-0 flex relative  justify-center'>
            <NextImage
              src='/images/landing/kolaborasi.png'
              width={720}
              height={576}
              alt='Kolaborasi'
              className='w-[65%] z-10'
              imgClassName='w-full drop-shadow-xl'
            />
            <div className='inset-0 absolute top-[20%] bg-gray-100 rounded-2xl'></div>
          </div>
          <Reveal
            trigger={
              <div className='w-full flex flex-col justify-center items-start md:items-end text-left md:text-right  gap-6' />
            }
          >
            <Tween
              from={{
                x: '50px',
                opacity: 0,
              }}
              to={{
                x: 0,
                opacity: 1,
              }}
              duration={1.2}
              stagger={0.2}
              ease='power2.out'
            >
              <Typography as='h1' variant='j2'>
                Menjadi Bagian dari Solusi, dengan Kolaborasi
              </Typography>
              <Typography variant='b1' color='secondary'>
                Sebagai Pahlawan SIP, Anda bertugas dalam mendampingi UMKM dalam
                proses sertifikasi halal
              </Typography>
            </Tween>
          </Reveal>
        </div>

        <div className='relative flex pb-20'>
          <div className='flex flex-col-reverse md:flex-row gap-10 layout z-10'>
            <Reveal
              trigger={
                <div className='w-full flex flex-col justify-center  gap-6' />
              }
            >
              <Tween
                from={{
                  x: '-50px',
                  opacity: 0,
                }}
                to={{
                  x: 0,
                  opacity: 1,
                }}
                duration={1.2}
                stagger={0.2}
                ease='power2.out'
              >
                <Typography as='h1' variant='j2'>
                  Capai Pangkat Tertinggi, Bangun Reputasi Anda!
                </Typography>
                <Typography variant='b1' color='secondary'>
                  Naikkan level Anda dari level Novice hingga Legend berdasarkan{' '}
                  <span className='font-bold'>XP </span>
                  dan <span className='font-bold'>koin SIP</span> yang Anda
                  kumpulkan
                </Typography>
              </Tween>
            </Reveal>

            <div className='w-full md:w-1/2 shrink-0 flex relative justify-end pr-[4%] '>
              <Parallax
                translateX={['10px', '-10px']}
                rotate={[0, 60]}
                className='w-[7%] absolute top-0 left-[4%]'
              >
                <NextImage
                  src='/images/landing/coin-1.png'
                  width={180}
                  height={180}
                  alt='Koin SIP'
                  className='w-full'
                  imgClassName='w-full'
                />
              </Parallax>

              <Parallax
                translateX={['20px', '-20px']}
                rotate={[0, 120]}
                className='w-[7%] absolute top-[18%] left-[2%]'
              >
                <NextImage
                  src='/images/landing/coin-2.png'
                  width={180}
                  height={180}
                  alt='Koin SIP'
                  className='w-full'
                  imgClassName='w-full'
                />
              </Parallax>
              <Parallax
                translateX={['50px', '-50px']}
                rotate={[0, 180]}
                className='w-[7%] absolute top-[30%] left-[30%]'
              >
                <NextImage
                  src='/images/landing/coin-3.png'
                  width={180}
                  height={180}
                  alt='Koin SIP'
                  className='w-full'
                  imgClassName='w-full'
                />
              </Parallax>

              <NextImage
                src='/images/landing/reputasi.png'
                width={720}
                height={974}
                alt='Reputasi'
                className='w-[55%] z-10'
                imgClassName='w-full drop-shadow-xl'
              />
            </div>
          </div>
          <div className='absolute inset-0 top-[8%]  bg-gray-50'></div>
          <NextImage
            src='/images/landing/stair.svg'
            width={683}
            height={240}
            alt='Tangga'
            className='w-full md:w-2/3 absolute bottom-[90%] left-0'
            imgClassName='w-full'
          />
        </div>
      </section>

      <section className='relative flex bg-primary-200 overflow-hidden'>
        <div className='layout z-10 flex items-end justify-end'>
          <Reveal
            trigger={
              <div className='w-full md:max-w-[60%] flex flex-col items-end text-right gap-6 pt-40 md:pt-56 pb-12 md:pb-20' />
            }
          >
            <Tween
              from={{
                y: '-50px',
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
              <Typography as='h1' variant='j2'>
                Bangun Surga Kuliner Virtual!
              </Typography>
              <Typography variant='b1'>
                Bersihkan area di peta dan bangun Surga Kuliner virtual Anda!
              </Typography>
            </Tween>
          </Reveal>
        </div>
        <NextImage
          src='/images/landing/surga-kuliner.png'
          width={2000}
          height={1000}
          alt='Surga Kuliner'
          className='w-full absolute inset-0'
          imgClassName='w-full'
        />
      </section>
    </>
  );
}

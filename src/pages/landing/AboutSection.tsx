import * as React from 'react';
import { Reveal, Tween } from 'react-gsap';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function AboutSection() {
  return (
    <section id='tentang' className='min-h-main bg-gray-50 relative flex '>
      <div className='layout gap-10 flex flex-col md:flex-row py-20 z-20'>
        <div className='flex flex-col gap-5 w-full md:w-5/12'>
          <Typography as='h1' variant='j2'>
            Tentang SIAR Halal
          </Typography>
          <Typography variant='b1' color='secondary'>
            Komunitas pahlawan dari Pusat Kajian Halal Institut Teknologi
            Sepuluh Nopember yang bertugas untuk melenyapkan kabut jahat Syubhat
            yang menyelimuti dunia
          </Typography>
        </div>
        <Reveal
          trigger={<div className='w-full md:w-4/12 flex flex-col gap-8' />}
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
            duration={1}
            stagger={0.2}
            ease='power2.out'
          >
            <div className='p-6 flex flex-col gap-3 rounded-2xl bg-gray-100/50 shadow-lg md:bg-white/30 backdrop-blur-none md:backdrop-blur-md'>
              <Typography as='h1' variant='h1'>
                Misi Kami
              </Typography>
              <Typography variant='b2' color='secondary'>
                Menjadikan proses sertifikasi halal lebih mudah, cepat, dan
                menyenangkan bagi fasilitator, sehingga produk halal bisa dengan
                cepat tersedia untuk masyarakat
              </Typography>
            </div>
            <div className='p-6 flex flex-col gap-3 rounded-2xl bg-gray-100/50 shadow-lg md:bg-white/30 backdrop-blur-none md:backdrop-blur-md'>
              <Typography as='h1' variant='h1'>
                Visi Kami
              </Typography>
              <Typography variant='b2' color='secondary'>
                Menjadi platform digital terdepan untuk sertifikasi halal,
                diakui karena keandalan, kecepatan, dan gamifikasinya.
              </Typography>
            </div>
          </Tween>
        </Reveal>
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 z-10'></div>
      <NextImage
        src='/images/landing/visi-misi.png'
        width={1080}
        height={884.27}
        alt='Pahlawan'
        className='w-full lg:w-2/3 absolute right-0 bottom-0'
      />
    </section>
  );
}

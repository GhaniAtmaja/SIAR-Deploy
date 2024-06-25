import { HelpCircle, User } from 'lucide-react';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

import AjuanSection from '@/pages/dashboard/components/AjuanSection';
import LeaderboardSection from '@/pages/dashboard/components/LeaderboardSection';
import MisiSection from '@/pages/dashboard/components/MisiSection';
import SurgaKulinerSection from '@/pages/dashboard/components/SurgaKulinerSection';

export default withAuth('optional')(DashboardPage);
function DashboardPage() {
  const user = useAuthStore.useUser();
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Dashboard' />

      <main className='py-12 flex flex-col gap-8 '>
        <section className='dashboard-layout flex z-10 justify-between'>
          <div>
            <Typography
              as='h1'
              variant='c1'
              className='uppercase tracking-wider'
              color='secondary'
            >
              Selamat Datang Kembali
            </Typography>
            <Typography as='h1' variant='j3' className='mt-1'>
              {user?.name}
            </Typography>
          </div>
          <div className='flex items-center gap-3'>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ButtonLink href='https://ptsp.halal.go.id' leftIcon={User}>
                    Akun PTSP
                  </ButtonLink>
                </TooltipTrigger>
                <TooltipContent>
                  <Typography variant='c1'>Akses Akun PTSP</Typography>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
        <section className='dashboard-layout grid z-10 gap-6 lg:grid-cols-3'>
          <div className='flex flex-col gap-6 max-h-[40rem]'>
            <MisiSection />
            <AjuanSection />
          </div>
          <LeaderboardSection />
          <div className='flex flex-col gap-6 max-h-[40rem]'>
            <SurgaKulinerSection />
            <div className='flex justify-between items-center gap-4'>
              <div>
                <Typography variant='s3'>Butuh Bantuan?</Typography>
                <Typography variant='c1' className='mt-2'>
                  Sebelum anda memulai perjalanan anda, Harap membaca panduan
                  berikut{' '}
                  <PrimaryLink
                    size='sm'
                    variant='basic'
                    className='text-xs sm:text-xs'
                    href='/bantuan'
                  >
                    ini
                  </PrimaryLink>
                </Typography>
              </div>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconLink
                      href='/bantuan'
                      icon={HelpCircle}
                      variant='outline'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <Typography variant='c1'>Bantuan</Typography>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>

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

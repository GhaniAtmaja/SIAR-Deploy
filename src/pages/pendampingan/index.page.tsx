import clsx from 'clsx';
import { Eye } from 'lucide-react';

import SimpleCard from '@/components/cards/SimpleCard';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import useAjuanStore from '@/store/useAjuanStore';

import { AjuanDataType } from '@/content/ajuan';

export default withAuth('optional')(AjuanPage);
function AjuanPage() {
  const ajuan = useAjuanStore.useData();
  const ajuanData = ajuan.filter(
    (data) => data.status === 'accepted' || data.status === 'completed',
  );
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Pendampingan Sertifikasi' />

      <main className='py-12 flex flex-col gap-12'>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/pendampingan']}
        >
          <PageHeader.Title>Pendampingan Sertifikasi</PageHeader.Title>
        </PageHeader>

        <section className='dashboard-layout grid grid-cols-1 lg:grid-cols-2 gap-8 z-10'>
          {ajuanData.map((ajuan) => (
            <PendampinganCard data={ajuan} key={ajuan.id} />
          ))}
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

function PendampinganCard({ data }: { data: AjuanDataType }) {
  return (
    <SimpleCard
      className={clsx(
        'flex flex-col md:flex-row gap-6',
        data.status === 'completed' && 'bg-green-50',
      )}
    >
      <NextImage
        src={data.image}
        alt={data.nama}
        layout='fill'
        className='shrink-0 aspect-video w-full md:w-1/3 relative rounded-xl overflow-hidden'
        imgClassName='w-full object-cover'
      />
      <div className='w-full flex flex-col'>
        <div className='space-y-2'>
          {data.status === 'completed' && (
            <Tag color='success' size='sm' className='w-fit'>
              Selesai
            </Tag>
          )}
          {data.status === 'accepted' && (
            <Tag color='primary' size='sm' className='w-fit'>
              Dalam Proses
            </Tag>
          )}

          <Typography variant='h3'>
            {'Sertifikasi Halal ' + data.nama}
          </Typography>
        </div>

        <div className='flex gap-8 items-center mt-3'>
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

        <div className='mt-auto'>
          <hr className='w-full  bg-typo-divider my-6' />
        </div>

        <div className='w-full flex gap-2 items-center md:justify-end'>
          <ButtonLink
            leftIcon={Eye}
            href={`/pendampingan/${data.id}`}
            variant='ghost'
          >
            Detail Pendampingan
          </ButtonLink>
        </div>
      </div>
    </SimpleCard>
  );
}

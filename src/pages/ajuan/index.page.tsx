import { Check, Eye, HelpingHand } from 'lucide-react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import SimpleCard from '@/components/cards/SimpleCard';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import ButtonLink from '@/components/links/ButtonLink';
import IconLink from '@/components/links/IconLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import useAjuanStore from '@/store/useAjuanStore';

import { AjuanDataType } from '@/content/ajuan';
import SedekahModal from '@/pages/ajuan/components/SedekahModal';

export default withAuth('optional')(AjuanPage);
function AjuanPage() {
  const ajuan = useAjuanStore.useData();
  const ajuanData = ajuan.filter(
    (data) => !(data.status === 'accepted' || data.status === 'completed'),
  );
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Ajuan' />

      <main className='py-12 flex flex-col gap-12'>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/ajuan']}
        >
          <PageHeader.Title>Ajuan Pendampingan</PageHeader.Title>
        </PageHeader>

        <section className='dashboard-layout grid grid-cols-1 lg:grid-cols-2 gap-8 z-10'>
          {ajuanData.map((ajuan) => (
            <AjuanCard data={ajuan} key={ajuan.id} />
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

function AjuanCard({ data }: { data: AjuanDataType }) {
  const dialog = useDialog();
  const router = useRouter();
  const setTerima = useAjuanStore.useSetTerima();

  const onAccept = () => {
    dialog({
      title: 'Terima Ajuan Pendampingan',
      description: (
        <>
          Anda akan menerima ajuan pendampingan{' '}
          <span className='font-semibold'>{data.nama}</span>.
          <br />
          Apa anda yakin ?
        </>
      ),
      submitText: 'Terima',
      variant: 'success',
    }).then(() => {
      setTerima(data.id);
      toast.success('Berhasil menerima ajuan');
      router.push(`/pendampingan/${data.id}`);
    });
  };

  return (
    <SimpleCard className='flex flex-col md:flex-row gap-6'>
      <NextImage
        src={data.image}
        alt={data.nama}
        layout='fill'
        className='shrink-0 aspect-video w-full md:w-1/3 relative rounded-xl overflow-hidden'
        imgClassName='w-full object-cover'
      />
      <div className='w-full flex flex-col'>
        <div className='space-y-2'>
          {data.status === 'waiting' && (
            <Tag color='warning' size='sm' className='w-fit'>
              Menunggu Konfirmasi
            </Tag>
          )}
          {data.status === 'gifted' && (
            <Tag color='DEFAULT' size='sm' className='w-fit'>
              Telah Disedekahkan
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
          {data.status === 'gifted' && (
            <ButtonLink
              leftIcon={Eye}
              href={`/ajuan/${data.id}`}
              variant='ghost'
            >
              Lihat Kemajuan
            </ButtonLink>
          )}
          {data.status === 'waiting' && (
            <div className='flex min-[1024px]:flex-col min-[1220px]:flex-row'>
              <SedekahModal data={data}>
                {({ openModal }) => (
                  <Button
                    variant='ghost'
                    onClick={openModal}
                    rightIcon={HelpingHand}
                  >
                    Sedehkahkan
                  </Button>
                )}
              </SedekahModal>
              <Button onClick={onAccept} rightIcon={Check}>
                Terima
              </Button>
              <IconLink
                variant='secondary'
                href={`/ajuan/${data.id}`}
                icon={Eye}
              />
            </div>
          )}
        </div>
      </div>
    </SimpleCard>
  );
}

import { Check, HelpingHand } from 'lucide-react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import Seo from '@/components/Seo';

import useAjuanStore from '@/store/useAjuanStore';

import { AjuanDataType } from '@/content/ajuan';
import SedekahModal from '@/pages/ajuan/components/SedekahModal';
import ProductDetailCard from '@/pages/pendampingan/components/ProductDetailCard';
import ShopDetailCard from '@/pages/pendampingan/components/ShopDetailCard';

export default withAuth('optional')(AjuanPage);
function AjuanPage({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const data = useAjuanStore
    .useData()
    .find((a) => a.id === +id) as AjuanDataType;
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Detail Ajuan Pendampingan' />

      <main className='py-12 flex flex-col gap-8'>
        <PageHeader
          className='z-10'
          backHref='/ajuan'
          crumbs={['/dashboard', '/ajuan', '/id']}
        >
          <PageHeader.Title>{data.nama}</PageHeader.Title>
          <PageHeader.ActionGroup>
            {data.status === 'waiting' && (
              <>
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
                <Button rightIcon={Check}>Terima</Button>
              </>
            )}
          </PageHeader.ActionGroup>
        </PageHeader>

        <section className='flex flex-col gap-6 z-10'>
          <ShopDetailCard data={data} />

          <ProductDetailCard data={data} />
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params?.id;
  if (typeof id !== 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
};

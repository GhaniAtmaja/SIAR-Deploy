import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import Seo from '@/components/Seo';

import StatusListSection from '@/pages/ajuan/components/StatusListSection';

export default withAuth('optional')(StatusAjuanPage);
function StatusAjuanPage({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Status Ajuan' />

      <main className='py-12 flex flex-col gap-4'>
        <PageHeader
          className='z-10'
          backHref={`/pendampingan/${id}`}
          crumbs={['/dashboard', '/pendampingan', '/status']}
        >
          <PageHeader.Title>Status Ajuan</PageHeader.Title>
        </PageHeader>

        <section className='dashboard-layout flex flex-col md:flex-row gap-3'>
          <StatusListSection />
        </section>
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

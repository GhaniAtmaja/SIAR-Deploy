import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import KoinOfferSection from '@/pages/tawaran/components/KoinOfferSection';

export default withAuth('optional')(TawaranPage);
function TawaranPage() {
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Tawaran' />

      <main className='py-12 flex flex-col gap-12'>
        <Typography variant='h1' className='text-center'>
          Tawaran
        </Typography>

        <section className='dashboard-layout z-10'>
          <KoinOfferSection />
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

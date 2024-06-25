import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import AboutSection from '@/pages/landing/AboutSection';
import FeatureSection from '@/pages/landing/FeatureSection';
import HomeSection from '@/pages/landing/HomeSection';
import SloganSection from '@/pages/landing/SloganSection';

export default withAuth('optional')(IndexPage);
function IndexPage() {
  return (
    <Layout>
      <Seo />
      <main>
        <HomeSection />
        <AboutSection />
        <FeatureSection />

        <SloganSection />
      </main>
    </Layout>
  );
}

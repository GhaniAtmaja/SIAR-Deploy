import * as React from 'react';

import clsxm from '@/lib/clsxm';

import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import DaftarAkun from '@/docs/bantuan/1_Daftar_Akun.md';
import MasukAkun from '@/docs/bantuan/2_Masuk_Akun.md';
import LupaPassword from '@/docs/bantuan/3_Lupa_Password.md';
import ManualBook from '@/docs/bantuan/Manual_Book.md';

const BANTUAN_CONTENT: { title: string; content: JSX.Element }[] = [
  {
    title: 'Introduction',
    content: <ManualBook />,
  },
  {
    title: 'Daftar Akun',
    content: <DaftarAkun />,
  },
  {
    title: 'Masuk Akun',
    content: <MasukAkun />,
  },
  {
    title: 'Lupa Password',
    content: <LupaPassword />,
  },
];

export default withAuth('optional')(IndexPage);
function IndexPage() {
  const [active, setActive] = React.useState<number>(0);
  return (
    <Layout>
      <Seo templateTitle='Bantuan' />
      <main>
        <section className='flex flex-col'>
          {/* title */}
          <div className='pt-20 pb-72 -mb-52 overflow-hidden relative flex'>
            <div className='layout z-10 flex  gap-1 flex-col items-center text-center'>
              <Typography
                variant='b1'
                className='text-primary-400 uppercase tracking-wider'
              >
                SIAR Halal
              </Typography>
              <Typography as='h1' variant='j1'>
                Apa yang bisa kami bantu?
              </Typography>
            </div>
            <div
              className='absolute inset-0 opacity-80'
              style={{
                backgroundImage: 'url("/images/background/grid.png")',
              }}
            >
              <div className='from-transparent to-white absolute inset-0 bg-gradient-to-b  bg-repeat' />
            </div>
          </div>

          {/* content */}
          <div className='flex z-10 md:flex-row flex-col layout gap-8 items-start min-h-main py-8'>
            <div className='md:max-w-[12rem] max-h-[50vh] overflow-y-scroll flex flex-col gap-1 scrollbar-hide bg-white border rounded-3xl p-4 border-typo-divider sticky top-16 w-full'>
              {BANTUAN_CONTENT.map((link, i) => (
                <button
                  onClick={() => setActive(i)}
                  key={i}
                  className={clsxm(
                    'w-full',
                    i === active
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-typo hover:bg-light hover:text-primary-500',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-primary-500',
                    'transition duration-100',
                  )}
                >
                  {/* {navigation.icon && (
                <navigation.icon
                  size={18}
                  className={clsx([
                    'mr-1.5 flex-shrink-0',
                    'text-typo-secondary',
                  ])}
                  aria-hidden='true'
                /> 
              )}*/}
                  <span>{link.title}</span>
                </button>
              ))}
            </div>
            <div className='w-full bg-light p-8 rounded-2xl'>
              {BANTUAN_CONTENT[active].content}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

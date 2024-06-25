import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { FAQ_CONTENT, FAQContentType, FAQItemType } from '@/content/faq';

export default withAuth('optional')(FaqPage);
function FaqPage() {
  return (
    <Layout>
      <Seo templateTitle='FAQ' />

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
                FAQ (Frequently Asked Questions)
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

          {/* faq content */}
          <div className='layout flex flex-col gap-8 pb-20  z-10'>
            {FAQ_CONTENT.map((faq, i) => (
              <FAQContent key={i} data={faq} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

function FAQContent({ data }: { data: FAQContentType }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className='flex flex-col gap-4'>
          <Disclosure.Button
            className={clsx([
              'flex w-full justify-between items-center rounded-3xl',
              'p-6 text-left gap-4',
              'bg-white text-primary-900',
              'border border-gray-100',
              'focus:outline-none focus-visible:border focus-visible:border-primary-500',
              ' hover:bg-gray-50',
              'soft-shadow',
            ])}
          >
            <span className='inline-flex items-center gap-4'>
              <span className='md:self-auto self-start inline-flex p-1 w-8 h-8 justify-center rounded-lg items-center bg-primary-50  text-primary-600'>
                <data.icon size='1.25em' />
              </span>
              <span className='s1 font-semibold'>{data.title}</span>
            </span>
            <span
              className={clsx([
                'rounded-full px-4 py-2 b3 transition-all duration-200 ease-out',
                open
                  ? 'bg-primary-100 text-primary-900'
                  : 'bg-primary-500 text-white ',
              ])}
            >
              Detail
            </span>
          </Disclosure.Button>
          <Transition
            show={open}
            enter='ease-out duration-300'
            enterFrom='opacity-0 -translate-y-16'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 '
            leaveTo='opacity-0 -translate-y-16'
          >
            <Disclosure.Panel
              static
              className={clsx(['bg-[#F7F7FB] py-12 rounded-3xl'])}
            >
              <div className='w-10/12 mx-auto flex flex-col gap-4 min-h-[2rem]'>
                {data.child.map((child, i) => (
                  <FAQItem key={i} data={child} />
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

function FAQItem({ data }: { data: FAQItemType }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={clsx([
            'rounded-2xl bg-white border-2 soft-shadow',

            open ? 'border-primary-600' : 'border-gray-100 hover:bg-gray-50',
          ])}
        >
          <Disclosure.Button
            className={clsx([
              'flex p-6 md:p-8 w-full justify-between items-center',
              'focus:outline-none',
              'text-left gap-4',
            ])}
          >
            <span className='s1'>{data.title}</span>
            <span
              className={clsx([
                'rounded-full transition-all duration-200 ease-out',
                'inline-flex justify-center items-center p-2',
                open
                  ? 'bg-primary-600 text-white rotate-90'
                  : 'bg-white text-primary-600',
                'shadow-lg shadow-gray-100',
              ])}
            >
              <ChevronRight size='1em' />
            </span>
          </Disclosure.Button>
          <Transition
            show={open}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Disclosure.Panel
              static
              className={clsx([' pl-6 md:pl-8 pr-6 md:pr-16 pb-16 md:-mt-3'])}
            >
              <Typography variant='b2' color='secondary'>
                {data.description}
              </Typography>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

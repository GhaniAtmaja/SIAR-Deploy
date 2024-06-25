import { promises as fs } from 'fs';
import path from 'path';
import * as React from 'react';
import { z } from 'zod';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { taskSchema } from './data/schema';

// export const metadata: Metadata = {
//   title: 'Tasks',
//   description: 'A task and issue tracker built using Tanstack Table.',
// };

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/pages/matching-list/data/tasks.json'),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export async function getServerSideProps() {
  const tasks = await getTasks();
  return {
    props: { tasks },
  };
}

const DashboardPage = ({ tasks }) => {
  const user = useAuthStore.useUser();

  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Ajuan Matching' />

      <main className='py-12 flex flex-col gap-8 '>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/matching-list']}
        >
          <PageHeader.Title>Ajuan Matching</PageHeader.Title>
        </PageHeader>

        {/* <section className='dashboard-layout flex z-10 justify-between'>
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

            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="font-normal text-muted-foreground mb-2">
                Here&apos;s a detailed list of your matches!
              </p>
            </div>
          </div>
        </section> */}

        <section className='dashboard-layout grid z-10 gap-6 lg'>
          <div className='container mx-auto py-5 bg-white p-4 rounded-[0.5rem] shadow-md'>
            <div>
              <DataTable data={tasks} columns={columns} />
            </div>
          </div>
          {/* Additional sections here */}
        </section>

        <div
          className='absolute inset-0 opacity-50'
          style={{
            backgroundImage: 'url("/images/background/grid.png")',
          }}
        >
          <div className='from-transparent to-light absolute inset-0 bg-gradient-to-b bg-repeat' />
        </div>
      </main>
    </DashboardLayout>
  );
};

export default withAuth('optional')(DashboardPage);

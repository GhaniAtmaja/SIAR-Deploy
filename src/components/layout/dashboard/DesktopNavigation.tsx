import * as React from 'react';

import Navigation from '@/components/layout/dashboard/Navigation';
import Logo from '@/components/layout/logo/Logo';

export default function DesktopNavigation() {
  return (
    <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
      <div className='fixed inset-x-0 top-0 flex min-h-[4rem] flex-shrink-0 items-center px-4'>
        <Logo />
      </div>
      <div className='mt-16 flex flex-grow flex-col overflow-y-auto'>
        <nav className='flex-1 space-y-1 pb-4'>
          <Navigation />
        </nav>
      </div>
    </div>
  );
}

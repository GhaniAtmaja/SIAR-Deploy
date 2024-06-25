import { Theme } from '@radix-ui/themes';
import { Inter as FontSans } from 'next/font/google';
import * as React from 'react';

import '@radix-ui/themes/styles.css';

import BaseDialog from '@/components/dialog/BaseDialog';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import useDialogStore from '@/store/useDialogStore';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <div>
      <Header />
      <Theme>{children}</Theme>
      <Footer />
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
    </div>
  );
}

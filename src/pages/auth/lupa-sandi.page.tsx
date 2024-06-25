import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';
import { AUTH_LINKS } from '@/content/header';
import AuthSection from '@/pages/auth/components/AuthSection';

type LoginForm = {
  email: string;
};

export default function LoginPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========

  const onSubmit = (data: LoginForm) => {
    // !TODO: connect to API's
    logger({ data });
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Lupa Kata Sandi' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Lupa Kata Sandi'
          description='Tidak masalah lupa kata sandi, asalkan jangan lupa jasa-jasa orang tua :)'
        >
          <NextImage
            src='/images/auth/forgot-password.png'
            width={1440}
            height={898}
            alt='Lupa Kata Sandi'
            className='absolute bottom-20 md:bottom-0 w-11/12 md:w-4/5 pointer-events-none select-none left-1/2 -translate-x-1/2 '
            imgClassName='w-full'
          />
        </AuthSection.Graphic>

        <AuthSection.Form>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-6 layout md:w-2/3'
            >
              <AuthSection.FormTitle
                title='Lupa kata sandi? Jangan khawatir Pahlawan SIP!'
                description='Masukkan alamat email yang terdaftar pada akunmu. Kami akan mengirim email berisi tautan untuk mereset kata sandi agar kamu bisa kembali melanjutkan petualangan.'
              />

              <div className='space-y-6'>
                <Input
                  id='email'
                  label='Alamat Email'
                  validation={{
                    required: 'Alamat Email wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Email'
                />
              </div>

              <Button className='w-full justify-center' type='submit'>
                Kirim
              </Button>

              <div className='flex gap-2 justify-center flex-wrap'>
                <Typography variant='b3'>
                  Sudah ingat lagi kata sandinya?
                </Typography>
                <PrimaryLink
                  href={AUTH_LINKS.login.href}
                  size='sm'
                  className='text-sm'
                >
                  {AUTH_LINKS.login.label}
                </PrimaryLink>
              </div>
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { validatePassword } from '@/lib/form-utils';
import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import PasswordInput from '@/components/forms/PasswordInput';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import AuthSection from '@/pages/auth/components/AuthSection';

type LoginForm = {
  password: string;
  repeat_password: string;
};

export default function LoginPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit, watch } = methods;

  const password = watch('password');
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========

  const onSubmit = (data: LoginForm) => {
    // !TODO: connect to API's
    logger({ data });
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Reset Kata Sandi' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Reset Kata Sandi'
          description='Waktunya ganti kata sandi supaya ingatanmu makin tajam menghancurkan kenangan masa lalu!'
        >
          <NextImage
            src='/images/auth/reset-password.png'
            width={1440}
            height={1177}
            alt='Membersihkan dunia dari kabut jahat Syubhat!'
            className='absolute bottom-20 md:bottom-0 w-11/12 md:w-2/3 pointer-events-none select-none left-1/2 -translate-x-1/2 '
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
                title='Atur ulang kata sandi'
                description='Masukkan kata sandi baru pada kolom di bawah ini dan konfirmasikan lagi di kolom berikutnya. Pastikan kata sandi baru mudah diingat tapi sulit ditebak ya.'
              />

              <div className='space-y-6'>
                <PasswordInput
                  id='password'
                  label='Kata Sandi'
                  validation={{
                    required: 'Kata Sandi wajib diisi',
                    validate: validatePassword,
                  }}
                  placeholder='Masukkan password baru'
                />
                <PasswordInput
                  id='repeat_password'
                  label='Konfirmasi Kata Sandi'
                  validation={{
                    validate: (value) =>
                      value === password || 'Konfirmasi password tidak sama',
                  }}
                  placeholder='Masukkan konfirmasi password'
                  helperText='Masukkan kembali password baru'
                />
              </div>

              <Button className='w-full justify-center' type='submit'>
                Atur Ulang
              </Button>
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

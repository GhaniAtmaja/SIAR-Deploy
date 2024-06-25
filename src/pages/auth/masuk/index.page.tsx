import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DevelopmentCard from '@/components/cards/DevelopmentCard';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { AUTH_LINKS } from '@/content/header';
import AuthSection from '@/pages/auth/components/AuthSection';
import { useLoginMutation } from '@/pages/auth/masuk/hooks/useLoginMutation';

type LoginForm = {
  email: string;
  password: string;
};

export default withAuth('auth')(LoginPage);
function LoginPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const { mutateAsync: login, isLoading } = useLoginMutation();
  const onSubmit = (data: LoginForm) => {
    login(data);
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Masuk' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Masuk'
          description='Setelah masuk, kamu bisa memantau perkembangan misimu dan melihat peta persebaran kabut jahat Syubhat. Semangat Pahlawan!'
        >
          <NextImage
            src='/images/auth/masuk.png'
            width={1440}
            height={820}
            alt='Melihat Peta Persebaran Kabut Jahat Syubhat'
            className='absolute bottom-0 w-full pointer-events-none select-none'
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
                title='Masuk ke Akun Anda'
                description=' Hai Pahlawan SIP! Masukkan identitasmu agar bisa melanjutkan
                  petualangan membersihkan kabut jahat Syubhat. Dunia sangat
                  membutuhkanmu!'
              />

              <div className='space-y-6'>
                <Input
                  id='email'
                  label='Alamat Email'
                  validation={{ required: 'Alamat Email wajib diisi' }}
                />
                <div className='relative'>
                  <PasswordInput
                    id='password'
                    label='Kata Sandi'
                    validation={{ required: 'Kata Sandi wajib diisi' }}
                  />
                  <UnstyledLink
                    href={AUTH_LINKS['forgot-password'].href}
                    className='absolute right-0 top-0 group'
                  >
                    <Typography
                      variant='s3'
                      className='text-primary-500 group-hover:text-primary-600'
                    >
                      Lupa Kata Sandi?
                    </Typography>
                  </UnstyledLink>
                </div>
              </div>

              <Button
                isLoading={isLoading}
                className='w-full justify-center'
                type='submit'
              >
                Masuk
              </Button>

              <DevelopmentCard>
                <Button
                  onClick={() => {
                    methods.setValue('email', 'winatungmiharja@gmail.com');
                    methods.setValue('password', 'test123');
                  }}
                >
                  Populate Login
                </Button>
              </DevelopmentCard>

              <div className='flex gap-2 justify-center flex-wrap'>
                <Typography variant='b3'>Belum Punya Akun?</Typography>
                <PrimaryLink
                  href={AUTH_LINKS.register.href}
                  size='sm'
                  className='text-sm'
                >
                  Daftar Sekarang
                </PrimaryLink>
              </div>
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

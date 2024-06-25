import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { validatePassword } from '@/lib/form-utils';
import { generateOptions } from '@/lib/generate-options';
import logger from '@/lib/logger';
import {
  useGetJawaTimurCities,
  useGetSubdistricts,
} from '@/hooks/query/location';

import Button from '@/components/buttons/Button';
import DevelopmentCard from '@/components/cards/DevelopmentCard';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import withAuth, { LOGIN_ROUTE } from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';
import { AUTH_LINKS } from '@/content/header';
import AuthSection from '@/pages/auth/components/AuthSection';
import {
  RegisterBody,
  useRegisterMutation,
} from '@/pages/auth/daftar/hooks/useRegisterMutation';

type RegisterForm = {
  username: string;
  name: string;
  email: string;
  password: string;
  repeat_password: string;
  city_id: string;
  subdistrict_id: string;
};
export default withAuth('auth')(LoginPage);
function LoginPage() {
  const router = useRouter();
  //#region  //*=========== Form ===========
  const methods = useForm<RegisterForm>({
    mode: 'onTouched',
  });
  const { handleSubmit, watch, setValue } = methods;

  const password = watch('password');
  const city_id = watch('city_id');
  //#endregion  //*======== Form ===========

  //#region  //*=========== Cities Data ===========
  const { data: cities, isLoading: isCitiesLoading } = useGetJawaTimurCities();

  const citiesOptions = generateOptions({
    data: cities,
    key: { value: 'id', label: 'nama' },
  });
  //#endregion  //*======== Cities Data ===========

  //#region  //*=========== Subdistrict Data ===========
  const { data: subdsitricts, isLoading: isSubdistrictsLoading } =
    useGetSubdistricts(city_id);

  const subdistrictsOptions = generateOptions({
    data: subdsitricts,
    key: { value: 'id', label: 'nama' },
  });
  //#endregion  //*======== Subdistrict Data ===========

  //#region  //*=========== Form Submit ===========
  const { mutateAsync: register, isLoading } = useRegisterMutation();
  const onSubmit = (data: RegisterForm) => {
    const body: RegisterBody = {
      username: data.username,
      name: data.name,
      email: data.email,
      password: data.password,
      region_city:
        citiesOptions.find((city) => city.value === data.city_id)?.label ?? '',
      region_kecamatan:
        subdistrictsOptions.find(
          (subdistrict) => subdistrict.value === data.subdistrict_id,
        )?.label ?? '',
    };
    logger({ body }, 'Register');
    register(body).then(() => {
      toast.success('Harap masuk dengan akun yang telah dibuat');
      router.push(LOGIN_ROUTE);
    });
  };
  //#endregion  //*======== Form Submit ===========

  React.useEffect(() => {
    setValue('subdistrict_id', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city_id]);

  return (
    <Layout>
      <Seo templateTitle='Daftar' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Daftar'
          description='Bergabunglah untuk menjadi Pahlawan SIP dan bersama-sama membersihkan dunia dari kabut jahat Syubhat!'
        >
          <NextImage
            src='/images/auth/daftar.png'
            width={1440}
            height={1440}
            alt='Membersihkan dunia dari kabut jahat Syubhat!'
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
                title='Buat Akun Baru'
                description='Isi data diri kamu dengan lengkap dan benar ya Pahlawan. Data ini akan digunakan untuk identitas kamu saat bertualang membersihkan kabut jahat Syubhat di dunia.'
              />

              <div className='space-y-6'>
                <Input
                  id='name'
                  label='Nama Lengkap'
                  validation={{ required: 'Nama Lengkap wajib diisi' }}
                  placeholder='Masukkan Nama Lengkap'
                />
                <Input
                  id='username'
                  label='Username'
                  validation={{
                    required: 'Username wajib diisi',
                    pattern: {
                      value: REGEX.USERNAME,
                      message:
                        'Username tidak boleh mangandung karakter selain huruf, angka, dan garis bawah',
                    },
                  }}
                  helperText='Username hanya boleh mengandung huruf, angka, dan garis bawah. Contoh : user123_'
                  placeholder='Masukkan Username'
                />

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
                <div className='grid grid-cols-2 gap-6'>
                  <SearchableSelectInput
                    id='city_id'
                    label='Kabupaten/Kota'
                    options={citiesOptions}
                    isLoading={isCitiesLoading}
                    placeholder='Pilih kabupaten/kota'
                    validation={{
                      required: 'Kabupaten/Kota harus diisi',
                    }}
                  />
                  <SearchableSelectInput
                    id='subdistrict_id'
                    label='Kecamatan'
                    options={subdistrictsOptions}
                    isLoading={isSubdistrictsLoading}
                    placeholder='Pilih Kecamatan'
                    validation={{
                      required: 'Kecamatan harus diisi',
                    }}
                  />
                </div>

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

              <DevelopmentCard>
                <Button
                  onClick={() => {
                    methods.setValue('username', 'wina');
                    methods.setValue('name', 'wina');
                    methods.setValue('email', 'winatungmiharja@gmail.com');
                    methods.setValue('password', 'test123');
                    methods.setValue('repeat_password', 'test123');
                    // methods.setValue('city_id', 'KAB. PACITAN');
                    // methods.setValue('subdistrict_id', 'Donorojo');
                  }}
                >
                  Populate Register
                </Button>
              </DevelopmentCard>

              <Button
                isLoading={isLoading}
                className='w-full justify-center'
                type='submit'
              >
                Buat Akun
              </Button>

              <div className='flex gap-2 justify-center flex-wrap'>
                <Typography variant='b3'>Sudah Punya Akun?</Typography>
                <PrimaryLink
                  href={AUTH_LINKS.login.href}
                  size='sm'
                  className='text-sm'
                >
                  Masuk
                </PrimaryLink>
              </div>
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

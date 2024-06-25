import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { generateOptions } from '@/lib/generate-options';
import logger from '@/lib/logger';
import {
  useGetJawaTimurCities,
  useGetSubdistricts,
} from '@/hooks/query/location';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import withAuth, { LOGIN_ROUTE } from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import REGEX from '@/constant/regex';
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
  food_id: string; // Add food_id here
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

  //#region  //*=========== Jenis Makanan ===========
  const food = [
    { id: 1, name: 'Snack' },
    { id: 2, name: 'Fast Food' },
    { id: 3, name: 'Beverages' },
    { id: 4, name: 'Pastry' },
    { id: 5, name: 'Noodles' },
  ];
  //#endregion  //*======== Jenis Makanan ===========

  //#region  //*=========== Cities Data ===========
  const { data: cities, isLoading: isCitiesLoading } = useGetJawaTimurCities();

  const citiesOptions = generateOptions({
    data: cities,
    key: { value: 'id', label: 'nama' },
  });
  //#endregion  //*======== Cities Data ===========

  //#region  //*=========== Subdistrict Data ===========
  const { data: subdistricts, isLoading: isSubdistrictsLoading } =
    useGetSubdistricts(city_id);

  const subdistrictsOptions = generateOptions({
    data: subdistricts,
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
      food: food.find((item) => item.id === data.food_id)?.name ?? '',
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
      <Seo templateTitle='Matching' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Matching'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
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
                title='Matching Form'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
              />

              <div className='space-y-6'>
                <Input
                  id='nama-usaha'
                  label='Nama usaha'
                  validation={{ required: 'Nama Usaha wajib diisi' }}
                  placeholder='Masukkan Nama Usaha'
                />
                <Input
                  id='pemilik-usaha'
                  label='Pemilik Usaha'
                  validation={{
                    required: 'Pemilik Usaha wajib diisi',
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
                  id='nama-penyelia'
                  label='Nama Penyelia'
                  validation={{
                    required: 'Nama Penyelia wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Nama Penyelia'
                />

                <Input
                  id='nik-penyelia'
                  label='NIK Penyelia'
                  validation={{
                    required: 'NIK Penyelia wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan NIK Penyelia'
                />

                <Input
                  id='nib'
                  label='NIB'
                  validation={{
                    required: 'NIB wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan NIB'
                />

                <Input
                  id='alamat-tempat-usaha'
                  label='Alamat Tempat Usaha'
                  validation={{
                    required: 'Alamat tempat usaha wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Tempat Usaha'
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

                <Input
                  id='alamat-tempat-produksi'
                  label='Alamat Tempat Produksi'
                  validation={{
                    required: 'Alamat tempat produksi wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Tempat Usaha'
                />

                <Input
                  id='hp'
                  label='Nomor HP'
                  validation={{
                    required: 'Nomor HP wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Nomor HP tidak valid',
                    },
                  }}
                  placeholder='Masukkan Nomor HP'
                />

                <Input
                  id='nomor-ijin-edar'
                  label='Nomor Ijin Edar'
                  validation={{
                    required: 'Nomor Ijin Edar wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Tempat Usaha'
                />

                <Input
                  id='merk-dagang-produk'
                  label='Merk Dagang Produk'
                  validation={{
                    required: 'Merk dagang produk wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Merk Dagang Produk tidak valid',
                    },
                  }}
                  placeholder='Masukkan Merk Dagang Produk'
                />

                <Input
                  id='daerah-pemasaran'
                  label='Daearah Pemasaran'
                  validation={{
                    required: 'Daerah pemasaran wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Daerah Pemasaran tidak valid',
                    },
                  }}
                  placeholder='Masukkan Daerah Pemasaran'
                />

                <Input
                  id='alamat-tempat-produksi'
                  label='Alamat Tempat Produksi'
                  validation={{
                    required: 'Alamat tempat produksi wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Tempat Usaha'
                />

                <div className='grid grid-cols-1 gap-12'>
                  <SearchableSelectInput
                    id='food_id'
                    label='Jenis Produk'
                    options={food.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isLoading={false}
                    placeholder='Pilih Jenis Produk'
                    validation={{
                      required: 'Jenis produk harus diisi',
                    }}
                    helperText='Pilih salah satu jenis produk'
                  />
                </div>

                {/* <PasswordInput
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
                /> */}
              </div>

              <Button
                isLoading={isLoading}
                className='w-full justify-center'
                type='submit'
              >
                Submit Data
              </Button>

              {/* <div className='flex gap-2 justify-center flex-wrap'>
                <Typography variant='b3'>Sudah Punya Akun?</Typography>
                <PrimaryLink
                  href={AUTH_LINKS.login.href}
                  size='sm'
                  className='text-sm'
                >
                  Masuk
                </PrimaryLink>
              </div> */}
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

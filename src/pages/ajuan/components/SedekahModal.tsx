import { HelpingHand } from 'lucide-react';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { generateOptions } from '@/lib/generate-options';
import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import useAjuanStore from '@/store/useAjuanStore';

import { AjuanDataType } from '@/content/ajuan';
import { LEADERBOARD_CONTENT } from '@/content/leaderboard';

type ModalReturnType = {
  openModal: () => void;
};

type SedekahForm = {
  teman: string;
};

export default function SedekahModal({
  children,
  data,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  data: AjuanDataType;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  const setSedekah = useAjuanStore.useSetSedekah();

  //#region  //*=========== Form ===========
  const methods = useForm<SedekahForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit: SubmitHandler<SedekahForm> = (form) => {
    logger({ form });

    toast.loading('Melakukan Sedekah');

    setTimeout(() => {
      setSedekah(data.id);
      setOpen(false);
      toast.success('Berhasil melakukan sedekah');
      toast.dismiss();
    }, 1000);

    return;
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title='Sedekahkan Ajuan'
        childrenClassName='divide-y-0'
      >
        <Modal.Section className='flex flex-col gap-6 p-0 sm:p-0'>
          <NextImage
            src={data.image}
            alt={data.nama}
            layout='fill'
            className='shrink-0 aspect-[3/1] w-full relative overflow-hidden'
            imgClassName='w-full object-cover'
          />
        </Modal.Section>

        <Modal.Section>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='w-full flex flex-col'
            >
              <Typography variant='h3'>
                {'Sertifikasi Halal ' + data.nama}
              </Typography>

              <div className='flex gap-8 items-center mt-3'>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-white shadow rounded-full'>
                    <NextImage
                      src='/images/icon/koin-sip.png'
                      width={120}
                      height={120}
                      className='w-5'
                      imgClassName='w-full'
                      alt='Koin SIP'
                    />
                  </div>
                  <div>
                    <Typography variant='c1' className='whitespace-nowrap'>
                      Koin SIP
                    </Typography>
                    <Typography variant='s2'>{data.koinReward}</Typography>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='p-2 bg-white shadow rounded-full inline-flex items-center justify-center'>
                    <div className='text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-800 font-bold w-5 h-5 c1 inline-flex items-center justify-center'>
                      XP
                    </div>
                  </div>
                  <div>
                    <Typography variant='c1' className='whitespace-nowrap'>
                      XP
                    </Typography>
                    <Typography variant='s2'>{data.xpReward}</Typography>
                  </div>
                </div>
              </div>

              <SearchableSelectInput
                id='teman'
                label='Pilih Teman yang ingin disedekahkan'
                options={generateOptions({
                  data: LEADERBOARD_CONTENT,
                  key: {
                    value: 'name',
                    label: 'name',
                  },
                })}
                placeholder='Teman Anda'
                validation={{
                  required: 'Teman yang ingin disedekahkan harus diisi',
                }}
                containerClassName='mt-3'
              />

              <div className='mt-auto'>
                <hr className='w-full  bg-typo-divider my-6' />
              </div>

              <Typography variant='c1'>
                Dengan menyetujui ini, Anda telah siap untuk melakukan sedekah
                misi atau tugas Anda kepada orang yang telah dituju
              </Typography>

              <div className='w-full mt-3 flex gap-2 items-center justify-end'>
                <Button variant='outline' onClick={() => setOpen(false)}>
                  Batal
                </Button>
                <Button type='submit' rightIcon={HelpingHand}>
                  Sedehkahkan
                </Button>
              </div>
            </form>
          </FormProvider>
        </Modal.Section>
      </Modal>
    </>
  );
}

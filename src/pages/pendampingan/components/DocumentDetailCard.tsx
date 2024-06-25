import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DropzoneInput from '@/components/forms/DropzoneInput';
import Card from '@/components/layout/dashboard/Card';

import { AjuanDataType } from '@/content/ajuan';

import { File } from '@/types/dropzone';

type EditImageForm = {
  image: File;
};

export default function DocumentDetailCard({
  data,
}: {
  data: AjuanDataType['dokumen'];
}) {
  //#region  //*=========== Form ===========
  const methods = useForm<EditImageForm>({
    mode: 'onChange',
    values: React.useMemo(
      () => ({
        image: data.map((d) => ({
          preview: d.image,
          name: d.name,
          type: 'image/jpeg',
        })),
      }),
      [data],
    ),
  });
  //#endregion  //*======== Form ===========

  return (
    <FormProvider {...methods}>
      <Card title='Dokumen Terkait'>
        <Card.Section>
          <DropzoneInput id='image' label={null} readOnly />
        </Card.Section>
      </Card>
    </FormProvider>
  );
}

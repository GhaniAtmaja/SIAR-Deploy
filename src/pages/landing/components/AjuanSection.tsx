import { ChevronRight } from 'lucide-react';
import React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import useAjuanStore from '@/store/useAjuanStore';

import { AjuanDataType } from '@/content/ajuan';

export default function AjuanSection() {
  const ajuan = useAjuanStore.useData();
  return (
    <SimpleCard className='overflow-hidden flex flex-col p-0 sm:p-0 row-start-2 h-1/2'>
      <div className='flex justify-between items-center p-6 pb-0'>
        <Typography variant='s1'>Ajuan</Typography>
      </div>
      <div className='mt-4 pt-0 overflow-y-auto scrollbar-hide flex flex-col'>
        {ajuan.map((a, i) => (
          <AjuanListItem key={i} data={a} />
        ))}
      </div>
    </SimpleCard>
  );
}

function AjuanListItem({ data }: { data: AjuanDataType }) {
  return (
    <UnstyledLink
      href={
        data.status === 'accepted' || data.status === 'completed'
          ? `/pendampingan/${data.id}`
          : `/ajuan/${data.id}`
      }
      className='flex group hover:bg-gray-100 px-6 py-3 items-center justify-between gap-4'
    >
      <div className='flex items-center gap-4'>
        <NextImage
          src={data.image}
          alt={data.nama}
          layout='fill'
          className='shrink-0 aspect-square w-12 relative rounded-xl overflow-hidden'
          imgClassName='w-full object-cover'
        />
        <div>
          <Typography variant='s3'>{data.nama}</Typography>
          {data.status === 'waiting' && (
            <Tag color='warning' size='sm' className='w-fit'>
              Menunggu Konfirmasi
            </Tag>
          )}
          {data.status === 'gifted' && (
            <Tag color='DEFAULT' size='sm' className='w-fit'>
              Telah Disedekahkan
            </Tag>
          )}
          {data.status === 'completed' && (
            <Tag color='success' size='sm' className='w-fit'>
              Selesai
            </Tag>
          )}
          {data.status === 'accepted' && (
            <Tag color='primary' size='sm' className='w-fit'>
              Dalam Proses
            </Tag>
          )}
        </div>
      </div>
      <ChevronRight
        className='text-typo-secondary group-hover:text-typo'
        size='1em'
      />
    </UnstyledLink>
  );
}

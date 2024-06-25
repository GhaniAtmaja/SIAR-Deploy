import { Eye } from 'lucide-react';
import * as React from 'react';

import Card from '@/components/layout/dashboard/Card';
import IconLink from '@/components/links/IconLink';
import NextImage from '@/components/NextImage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';
import Typography from '@/components/typography/Typography';

import { AjuanDataType } from '@/content/ajuan';

export default function ProductDetailCard({ data }: { data: AjuanDataType }) {
  return (
    <Card title='Daftar makanan permintaan sertifikasi'>
      <Card.Section className='gap-6'>
        {data.produk.map((p, i) => (
          <div key={i} className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-4 w-full'>
              <NextImage
                src={p.image}
                alt={p.name}
                layout='fill'
                className='shrink-0 aspect-square w-20 relative rounded-xl overflow-hidden'
                imgClassName='w-full object-cover'
              />
              <div>
                <Typography variant='s3'>{p.name}</Typography>
                <Typography variant='c1' color='secondary'>
                  {p.description}
                </Typography>
              </div>
              {(data.status === 'accepted' || data.status === 'completed') && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <IconLink
                        className='ml-auto'
                        href={`/pendampingan/${data.id}/status/${p.id}`}
                        icon={Eye}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <Typography variant='c1'>Lihat Status</Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        ))}
      </Card.Section>
    </Card>
  );
}

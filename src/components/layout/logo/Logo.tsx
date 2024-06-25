import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import { ExtractProps } from '@/types/helper';

type LogoProps = {
  color?: 'white' | 'black';
} & Omit<ExtractProps<typeof NextImage>, 'src' | 'alt' | 'width' | 'height'>;
export default function Logo({
  color = 'black',
  className,
  ...props
}: LogoProps) {
  return (
    <NextImage
      src={`/images/icon/Logo-${color}.svg`}
      width={64}
      height={64}
      alt='SIPHALAL'
      className={clsxm(['w-16', className])}
      {...props}
    />
  );
}

import * as React from 'react';

import clsxm from '@/lib/clsxm';

import SimpleCard from '@/components/cards/SimpleCard';
import Typography from '@/components/typography/Typography';

type DevelopmentCardProps = React.ComponentPropsWithoutRef<'div'>;

export default function DevelopmentCard({
  className,
  children,
  ...rest
}: DevelopmentCardProps) {
  const envFlag = process.env.NEXT_PUBLIC_SHOW_DEVELOPMENT_CARD === 'true';
  const shouldShow = envFlag || process.env.NODE_ENV !== 'production';

  return shouldShow ? (
    <SimpleCard
      className={clsxm([
        'border-primary-500 bg-light border-2 border-dashed',
        'overflow-auto pt-2',
        className,
      ])}
      {...rest}
    >
      <Typography className='text-typo-secondary mb-2 text-center' variant='c1'>
        Development Only
      </Typography>
      {children}
    </SimpleCard>
  ) : null;
}

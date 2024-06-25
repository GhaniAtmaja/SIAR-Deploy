import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Breadcrumb from '@/components/Breadcrumb';
import IconLink from '@/components/links/IconLink';
import Typography from '@/components/typography/Typography';

import { ExtractProps } from '@/types/helper';

type PageHeaderProps = {
  crumbs: ExtractProps<typeof Breadcrumb>['crumbs'];
  /** Add this props to render back icon-link */
  backHref?: string;
} & React.ComponentPropsWithoutRef<'div'>;

function PageHeaderRoot({
  className,
  crumbs,
  backHref,
  children,
  ...rest
}: PageHeaderProps) {
  return (
    <header className={clsx(['dashboard-layout', className])} {...rest}>
      <div className='flex items-center gap-5 lg:gap-4'>
        {backHref && (
          <IconLink
            variant='outline'
            size='sm'
            iconClassName='text-lg'
            icon={ArrowLeft}
            href={backHref}
          />
        )}
        <div className='flex-grow'>
          <Breadcrumb crumbs={crumbs} />
          <div
            className={clsx([
              'mt-1',
              'sm:flex sm:items-center sm:justify-between',
            ])}
          >
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

function Title({
  className,
  children,
  description,
  classNames,
  ...rest
}: {
  description?: React.ReactNode;
  classNames?: {
    title?: string;
    description?: string;
  };
} & Omit<ExtractProps<typeof Typography>, 'variant' | 'as'>) {
  return (
    <div className={clsxm(['flex-grow', className])}>
      <Typography as='h1' variant='j3' className={classNames?.title} {...rest}>
        {children}
      </Typography>
      {description && (
        <Typography
          variant='b3'
          className={clsxm(['mt-0.5', classNames?.description])}
          color='tertiary'
        >
          {description}
        </Typography>
      )}
    </div>
  );
}

function ActionGroup({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsxm(['flex gap-2', 'mt-4 sm:mt-0', className])} {...rest}>
      {children}
    </div>
  );
}

const PageHeader = Object.assign(PageHeaderRoot, {
  Title,
  ActionGroup,
});
export default PageHeader;

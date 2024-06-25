import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

import { ExtractProps } from '@/types/helper';

type NavigationLinkProps = {
  withUnderlineAnimation?: boolean;
  size?: 'lg' | 'base';
  icon?: IconType | LucideIcon;
} & ExtractProps<typeof UnstyledLink>;
export default function HeaderLink({
  withUnderlineAnimation = false,
  size = 'base',
  icon: Icon,
  href,
  children,
  className,
  ...rest
}: NavigationLinkProps) {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <li
      key={href}
      className={clsx([
        'relative h-full group',
        isActive && 'pointer-events-none',
      ])}
    >
      <UnstyledLink
        href={href}
        className={clsxm([
          'text-typo-secondary group-hover:text-typo',
          'h-full flex items-center gap-3 relative group',
          'transition-all duration-300 ease-out',
          className,
          isActive && 'text-primary-400',
        ])}
        {...rest}
      >
        {Icon && <Icon />}
        <Typography
          variant={size === 'lg' ? 's1' : 'b3'}
          className='text-inherit'
        >
          {children}
        </Typography>
        {withUnderlineAnimation && (
          <div
            className={clsx([
              'absolute bottom-0 left-0',
              'group-hover:opacity-100 opacity-0',
              'w-0 h-0.5 group-hover:w-full',
              'transition-all duration-300 ease-out',
              'bg-gradient-to-r from-primary-300 to-primary-500',
            ])}
          />
        )}
      </UnstyledLink>
    </li>
  );
}

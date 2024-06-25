import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import {
  Badge,
  Briefcase,
  ChevronDown,
  ClipboardList,
  Coins,
  Home,
  LucideIcon,
  Map,
  Minus,
  Plus,
  ShoppingCart,
  Store,
  User,
  UserCircle,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

export type Navigation = {
  name: string;
  href: string;
  icon?: IconType | LucideIcon;
  /**
   * Use this when the route is also used as a nested route
   * @example Use exactMatch for '/dashboard' to avoid both navigation links active when visiting '/dashboard/edit'
   */
  exactMatch?: boolean;
  children?: Navigation[];
};
type GroupedNavigation = {
  name: string;
  navigations: Navigation[];
};

type NavigationProps = React.ComponentPropsWithoutRef<'nav'>;

const groupNavs: GroupedNavigation[] = [
  {
    name: 'Dashboard',
    navigations: [
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: Home,
        exactMatch: true,
      },
      {
        name: 'Ajuan',
        href: '/ajuan',
        icon: ClipboardList,
      },
      {
        name: 'Pendampingan',
        href: '/pendampingan',
        icon: Users,
      },
      {
        name: 'Profile',
        href: '#',
        icon: UserCircle,
        exactMatch: true,
        children: [
          {
            name: 'Data',
            href: '#',
            icon: User,
            exactMatch: true,
          },
          {
            name: 'Lencana',
            href: '#',
            icon: Badge,
            exactMatch: true,
          },
          {
            name: 'XP',
            href: '#',
            icon: Coins,
            exactMatch: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Eksplorasi',
    navigations: [
      {
        name: 'Misi',
        href: '/misi',
        icon: Briefcase,
        exactMatch: true,
      },
      {
        name: 'Surga Kuliner',
        href: '/surga',
        icon: Map,
        exactMatch: true,
      },
      {
        name: 'Toko Ornamen',
        href: '/purchaseornamen',
        icon: Store,
        exactMatch: true,
      },
    ],
  },
  {
    name: 'Lainnya',
    navigations: [
      {
        name: 'Tawaran',
        href: '/tawaran',
        icon: ShoppingCart,
      },
    ],
  },
];

export default function Navigation({ className, ...rest }: NavigationProps) {
  return (
    <nav
      className={clsxm([
        'px-2 md:px-3',
        'divide-y divide-typo-divider',
        className,
      ])}
      {...rest}
    >
      {groupNavs.map((group) => (
        <Disclosure as='div' key={group.name} defaultOpen>
          {({ open }) => (
            <div className='py-5'>
              <div className='flex items-center'>
                <Typography
                  variant='s3'
                  color='secondary'
                  className='flex-grow truncate font-semibold uppercase tracking-[1px]'
                >
                  {group.name}
                </Typography>
                <Disclosure.Button
                  as={IconButton}
                  icon={open ? Minus : Plus}
                  size='xs'
                  variant='outline'
                />
              </div>
              <Disclosure.Panel className='mt-4 space-y-1.5'>
                {group.navigations.map((nav) =>
                  nav.children ? (
                    <NestedNavigation key={nav.name} navigation={nav} />
                  ) : (
                    <NavigationLink key={nav.name} navigation={nav} />
                  ),
                )}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </nav>
  );
}

function NestedNavigation({
  navigation: navChildren,
}: {
  navigation: Navigation;
}) {
  const router = useRouter();

  // Recursively check if any children is active
  function checkActive(nav?: Navigation[]): boolean {
    if (!nav) return false;

    return nav.some((n) => {
      if (!n.children) {
        const isActive = n.exactMatch
          ? router.pathname === n.href
          : router.pathname.startsWith(n.href);

        return isActive;
      }

      return checkActive(n.children);
    });
  }

  return (
    <Disclosure as='div' defaultOpen={checkActive(navChildren.children)}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={clsx(
              'hover:bg-typo-divider hover:text-primary-600',
              'text-typo-primary',
              'flex w-full items-center rounded-md px-2 py-2 text-sm font-medium',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500  focus-visible:ring-offset-primary-500',
              'transition duration-100',
              'font-averta',
            )}
          >
            {navChildren.icon && (
              <navChildren.icon
                size={18}
                className={clsx(
                  'mr-1.5 flex-shrink-0',
                  'text-typo-secondary',
                  open && 'mt-[1px] self-start',
                )}
                aria-hidden='true'
              />
            )}
            <span className={clsx('text-left', !open && 'truncate')}>
              {navChildren.name}
            </span>
            <ChevronDown
              size={18}
              className={clsx(
                'flex-shrink-0',
                'ml-auto text-typo-secondary',
                open && 'mt-[1px] rotate-180 self-start',
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className={clsx(['mt-1 space-y-0.5', 'ml-7'])}>
            {navChildren.children?.map((nav, i) => (
              <div
                className={clsxm([
                  'relative',

                  //* horizontal line
                  "before:absolute before:bg-typo-divider before:content-['']",
                  'before:-left-3',
                  // hack for nested navigation
                  nav.children
                    ? 'before:top-[18px]'
                    : 'before:top-1/2 before:-translate-y-1/2',
                  'before:h-px before:w-3',

                  //* vertical line
                  "after:absolute after:bg-typo-divider after:content-['']",
                  'after:-left-3 after:top-1/2 after:-translate-y-1/2',
                  'after:h-[calc(100%+4px)] after:w-px',
                  // last child
                  i === (navChildren.children?.length ?? 0) - 1 && [
                    nav.children ? 'after:h-[22px]' : 'after:h-[calc(50%+4px)]',
                    'after:top-0 after:-translate-y-1',
                  ],
                ])}
                key={nav.name}
              >
                {nav.children ? (
                  <NestedNavigation navigation={nav} />
                ) : (
                  <NavigationLink navigation={nav} />
                )}
              </div>
            ))}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

function NavigationLink({
  navigation,
  className,
}: {
  navigation: Navigation;
  className?: string;
}) {
  const router = useRouter();

  const linkRef = React.useRef<HTMLAnchorElement | null>(null);

  const isActive = navigation.exactMatch
    ? router.pathname === navigation.href
    : router.pathname.startsWith(navigation.href);

  React.useEffect(() => {
    isActive && linkRef.current?.scrollIntoView({ block: 'center' });
  }, [isActive]);

  return (
    <UnstyledLink
      href={navigation.href}
      ref={linkRef}
      className={clsxm(
        isActive
          ? 'bg-primary-50 text-primary-600'
          : 'text-typo hover:bg-typo-divider hover:text-primary-500',
        'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-primary-500',
        'transition duration-100',
        'font-averta',
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {navigation.icon && (
        <navigation.icon
          size={18}
          className={clsx(['mr-1.5 flex-shrink-0', 'text-typo-secondary'])}
          aria-hidden='true'
        />
      )}
      <span className={clsx([!isActive && 'truncate'])}>{navigation.name}</span>
    </UnstyledLink>
  );
}

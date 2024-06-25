import { Dialog, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Home, LogIn, LogOut, MenuIcon, User, User2 } from 'lucide-react';
import * as React from 'react';

import IconButton from '@/components/buttons/IconButton';
import HeaderLink from '@/components/layout/header/HeaderLink';
import Logo from '@/components/layout/logo/Logo';
import IconLink from '@/components/links/IconLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

import { AUTH_LINKS, LINKS } from '@/content/header';

const userNavigation = [{ name: 'Dashboard', href: '/dashboard' }];

export default function Header() {
  //#region  //*=========== Mobile Navigation ===========
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.createRef<HTMLDivElement>();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  //#endregion  //*======== Mobile Navigation ===========

  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();

  return (
    <header className='sticky top-0 z-[100] bg-white flex'>
      <div className='layout  h-16 z-10 items-center justify-between gap-8 flex'>
        <UnstyledLink href='/' title='Kembali ke Beranda'>
          <Logo />
          <span className='sr-only'>SIAR Halal</span>
        </UnstyledLink>

        {/* Desktop Navigation Menu */}
        <React.Fragment>
          <ul className=' gap-8 list-none h-full items-center hidden md:flex'>
            {LINKS.map((link, i) => (
              <HeaderLink key={i} href={link.href} withUnderlineAnimation>
                {link.label}
              </HeaderLink>
            ))}
          </ul>
          {user ? (
            <ul className='hidden md:flex items-center gap-4'>
              <Menu as='div' className='relative ml-3 '>
                <div>
                  <Menu.Button
                    data-cy='user-menu'
                    className={clsx([
                      '-mr-2 flex max-w-xs items-center gap-4 rounded-md bg-white px-0.5 py-1 text-sm',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    ])}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <div className='hidden min-w-0  flex-col items-end sm:flex'>
                      <Typography variant='b2'>{user?.name}</Typography>
                      <Typography variant='b3'>@{user?.username}</Typography>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-50'>
                      <User className='text-primary-600' />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <UnstyledLink
                            href={item.href}
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            {item.name}
                          </UnstyledLink>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          data-cy='logout'
                          className={clsx(
                            active ? 'bg-gray-100' : '',
                            'block w-full px-4 py-2 text-left text-sm text-gray-700',
                          )}
                        >
                          Keluar
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </ul>
          ) : (
            <ul className=' gap-4 items-center list-none h-full hidden md:flex'>
              <HeaderLink href={AUTH_LINKS.login.href}>
                {AUTH_LINKS.login.label}
              </HeaderLink>
              <div className='w-[1px] h-4  bg-typo-divider' />
              <HeaderLink
                href={AUTH_LINKS.register.href}
                className='text-secondary-400 group-hover:text-secondary-600 '
              >
                {AUTH_LINKS.register.label}
              </HeaderLink>
            </ul>
          )}
        </React.Fragment>

        {/* Mobile Navigation Menu */}
        <IconButton
          variant='ghost'
          size='lg'
          className='flex md:hidden text-typo'
          icon={MenuIcon}
          onClick={openModal}
        />
        <Transition appear show={isOpen} as={React.Fragment}>
          <Dialog
            as='div'
            className='relative z-50 xl:hidden'
            onClose={closeModal}
            initialFocus={containerRef}
          >
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 flex items-end overflow-y-hidden'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='translate-y-full'
                enterTo='translate-y-0'
                leave='ease-in duration-300'
                leaveFrom='translate-y-0'
                leaveTo='translate-y-full'
              >
                <Dialog.Panel className='w-full transform overflow-hidden text-left align-middle shadow-xl transition-all'>
                  <UnstyledLink
                    href='#menu'
                    className='bg-white relative -mb-1 block h-12 w-full rounded-t-full sm:h-16 lg:hidden'
                  >
                    <div className='bg-gray-300 absolute left-1/2 top-2 h-2 w-16 -translate-x-1/2 rounded-full'>
                      &nbsp;
                    </div>
                  </UnstyledLink>
                  <div id='menu' className='bg-white min-h-[50vh]'>
                    <div
                      className='px-6 pt-3 pb-12 divide-y divide-typo-divider'
                      ref={containerRef}
                    >
                      {user && (
                        <div className='w-full flex justify-between flex-wrap p-4 mb-6 rounded-lg bg-light'>
                          <div>
                            <Typography variant='b2'>{user?.name}</Typography>
                            <Typography
                              variant='b3'
                              className='text-primary-500'
                            >
                              @{user?.username}
                            </Typography>
                          </div>

                          <div className='flex items-center gap-4'>
                            <IconButton
                              variant='danger'
                              icon={LogOut}
                              onClick={logout}
                            />
                            <IconLink
                              variant='primary'
                              icon={Home}
                              href='/dashboard'
                            />
                          </div>
                        </div>
                      )}
                      <ul
                        className={clsx([
                          'gap-4 list-none flex flex-col',
                          user && 'mt-6 pt-6',
                        ])}
                      >
                        {LINKS.map((link, i) => (
                          <HeaderLink
                            key={i}
                            href={link.href}
                            size='lg'
                            icon={link.icon}
                          >
                            {link.label}
                          </HeaderLink>
                        ))}
                      </ul>
                      {!user && (
                        <ul className='gap-4 list-none flex flex-col mt-6 pt-6'>
                          <HeaderLink
                            href={AUTH_LINKS.login.href}
                            size='lg'
                            icon={LogIn}
                          >
                            {AUTH_LINKS.login.label}
                          </HeaderLink>

                          <HeaderLink
                            href={AUTH_LINKS.register.href}
                            size='lg'
                            icon={User2}
                          >
                            {AUTH_LINKS.register.label}
                          </HeaderLink>
                        </ul>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      <hr className='border-typo-divider absolute inset-x-0 bottom-0 h-[1px] w-full' />
    </header>
  );
}

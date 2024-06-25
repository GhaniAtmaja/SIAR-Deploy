import * as React from 'react';
import { Tween } from 'react-gsap';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type AuthSectionProps = React.ComponentPropsWithoutRef<'div'>;
export function AuthSectionRoot({ className, ...rest }: AuthSectionProps) {
  return (
    <div
      className={clsxm([
        'relative flex flex-col md:flex-row-reverse bg-white min-h-main',
        className,
      ])}
      {...rest}
    />
  );
}

type FormProps = React.ComponentPropsWithoutRef<'div'>;
function Form({ className, ...rest }: FormProps) {
  return (
    <div
      id='form'
      className={clsxm([
        'w-full md:w-1/2  z-10 flex flex-col justify-center md:items-center shrink-0 h-full bg-white  md:min-h-main py-12',
        className,
      ])}
      {...rest}
    />
  );
}

type GraphicProps = {
  prompt: string;
  description: string;
} & React.ComponentPropsWithoutRef<'div'>;
function Graphic({
  prompt,
  description,
  children,
  className,
  ...rest
}: GraphicProps) {
  return (
    <div
      className={clsxm([
        'w-full md:w-1/2 shrink-0 relative flex flex-col',

        'overflow-hidden min-h-main sticky top-[4rem]',
        className,
      ])}
      {...rest}
    >
      <div className='flex flex-col min-h-main items-start shrink-0 layout md:w-10/12 pt-20 md:pt-8 xl:pt-20 z-10'>
        <Tween
          from={{
            y: '-50px',
            opacity: 0,
          }}
          to={{
            y: 0,
            opacity: 1,
          }}
          duration={1.2}
          stagger={0.2}
          ease='power2.out'
        >
          <Typography
            variant='s2'
            className='uppercase tracking-wider'
            color='secondary'
          >
            SIAR Halal
          </Typography>
          <Typography as='h1' variant='j1' className='block md:hidden'>
            {prompt}
          </Typography>
          <Typography as='h1' variant='s1' className='mt-3'>
            {description}
          </Typography>
          <ButtonLink href='#form' className='mt-6 flex md:hidden' size='lg'>
            {prompt}
          </ButtonLink>
        </Tween>
      </div>

      <div
        className='absolute inset-0 bg-cover bg-no-repeat'
        style={{ backgroundImage: "url('/images/landing/map.jpg')" }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-300 opacity-50' />
      {children}
      <NextImage
        src='/images/landing/cloud-1.png'
        width={270}
        height={140}
        className='w-1/3 absolute right-0 bottom-0 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none'
        imgClassName='w-full opacity-80 blur-sm animate-[float_13s_ease-out_infinite]'
        alt='Awan'
      />
      <NextImage
        src='/images/landing/cloud-2.png'
        width={270}
        height={140}
        className='w-1/2 absolute left-0 bottom-1/2 -translate-x-1/3'
        imgClassName='w-full opacity-60 blur-md animate-[float_17s_ease-out_infinite] pointer-events-none select-none'
        alt='Awan'
      />
      <NextImage
        src='/images/landing/cloud-3.png'
        width={129}
        height={100}
        className='w-1/4 absolute right-0 top-1/4 -translate-x-1/4'
        imgClassName='w-full opacity-80 animate-[float-reverse_29s_ease-out_infinite] '
        alt='Awan'
      />
    </div>
  );
}
type FormTitleProps = {
  title: React.ReactNode;
  description: string;
} & React.ComponentPropsWithoutRef<'div'>;

function FormTitle({ title, description, className, ...rest }: FormTitleProps) {
  return (
    <div className={clsxm(['space-y-2', className])} {...rest}>
      <Typography as='h1' variant='j3'>
        {title}
      </Typography>

      <Typography variant='b3' color='secondary'>
        {description}
      </Typography>
    </div>
  );
}

const AuthSection = Object.assign(AuthSectionRoot, {
  Form,
  FormTitle,
  Graphic,
});
export default AuthSection;

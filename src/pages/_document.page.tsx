import { Head, Html, Main, NextScript } from 'next/document';

const preloadFont = [
  '/fonts/Cal-Sans/CalSans-SemiBold.woff2',

  '/fonts/Matter/Matter-Regular.woff2',
  '/fonts/Matter/Matter-RegularItalic.woff2',
  '/fonts/Matter/Matter-Medium.woff2',
  '/fonts/Matter/Matter-MediumItalic.woff2',
  '/fonts/Matter/Matter-SemiBold.woff2',
  '/fonts/Matter/Matter-SemiBoldItalic.woff2',
  '/fonts/Matter/Matter-Bold.woff2',
  '/fonts/Matter/Matter-BoldItalic.woff2',
  '/fonts/Matter/Matter-Heavy.woff2',
  '/fonts/Matter/Matter-Heavy.woff2',
];

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {preloadFont.map((link) => (
          <link
            rel='preload'
            key={link}
            href={link}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hab's portfolio",
  description:
    'Explore the portfolio of Habtesellasie Fissha, a UI/UX designer with a blend of creativity and technical expertise. Discover intuitive and engaging user experiences crafted with certifications from industry leaders such as Google, Meta, IBM, and Scrimba.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#5bbad5' />
        <meta name='theme-color' content='#ffffff' />

        <meta
          property='og:image'
          content='/favicon/android-chrome-512x512.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />
        <meta
          property='og:image:secure_url'
          content='/favicon/android-chrome-512x512.png'
        />
        <meta name='author' content='Habtesellasie Fissha' />
        <meta
          name='description'
          content='Explore the portfolio of Habtesellasie Fissha, a UI/UX designer with a blend of creativity and technical expertise. Discover intuitive and engaging user experiences crafted with certifications from industry leaders such as Google, Meta, IBM, and Scrimba.'
        />
      </Head>
      <body className={`${playfairDisplay.className} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}

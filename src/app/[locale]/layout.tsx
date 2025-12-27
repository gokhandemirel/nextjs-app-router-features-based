import '@/styles/globals.css';
import ReduxProvider from '@/store/ReduxProvider';
import { NextIntlClientProvider } from 'next-intl';
import StyledComponentsRegistry from '@/styles/StyledComponentRegistry';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto();

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale }: { locale: string } = await params;
  const t = await getTranslations({
    locale: locale,
    namespace: 'metaData'
  });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

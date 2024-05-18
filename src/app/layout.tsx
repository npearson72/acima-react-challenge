import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  MantineProvider
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Logo } from '~/components';

export const metadata = {
  title: 'Acima React Challenge',
  description: 'I have followed the instructions carefully'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={{ primaryColor: 'gray' }}>
          <AppShell header={{ height: 60 }} px="xl">
            <AppShellHeader px="xl">
              <Logo />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

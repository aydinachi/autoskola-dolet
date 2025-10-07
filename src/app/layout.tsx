import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoŠkola Dolet - Polaganje vozačkog ispita',
  description: 'AutoŠkola Dolet - vaš partner za uspješno polaganje vozačkog ispita. Profesionalna obuka, iskusni instruktori, najbolji rezultati.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

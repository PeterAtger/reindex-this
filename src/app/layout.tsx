import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import connectDB from '@/lib/connect-db';
import favicon from './favicon.ico';
import Header from './components/Header';
import Leaves from './components/Leaves';
import Blobs from './components/Blobs';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Reindex This',
  description: 'Sitemaps ? Haha This is the new way to shove urls down google\'s throat!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await connectDB();

  return (
    <html lang="en">
      <link rel="icon" href={favicon.src} sizes="any" />
      <body className={inter.className}>
        <main className="flex min-h-screen justify-between flex-col items-center bg-gradient-to-br from-slate-200 to-slate-400 relative overflow-hidden">

          <Header />

          <Blobs />
          <Leaves />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}

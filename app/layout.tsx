import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invoice Builder',
  description: 'Build your professional invoice',
  icons: {
    icon: '/invoice.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-500`}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import QueryProvider from '@/providers/QueryProvider';
import UserSessionProvider from '@/providers/UserSessionProvider';
import MainNavbar from '@/components/MainNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth Practice',
  description: 'Next Auth Practice with credentials provider',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserSessionProvider>
          <>
            <QueryProvider>
              <>
                <MainNavbar />

                {children}
              </>
            </QueryProvider>

            <Toaster position="bottom-center" richColors />
          </>
        </UserSessionProvider>
      </body>
    </html>
  );
}

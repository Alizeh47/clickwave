import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Load Niconne font locally
const niconne = localFont({ 
  src: '../node_modules/@fontsource/niconne/files/niconne-latin-400-normal.woff2',
  variable: '--font-niconne'
});

export const metadata = {
  title: 'The Untitled UI Journal',
  description: 'A modern marketing tool and productivity app for small business owners, freelancers, and startup founders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${niconne.variable}`}>{children}</body>
    </html>
  );
}

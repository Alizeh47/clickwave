import { Inter, Pinyon_Script, IM_Fell_Great_Primer, Bad_Script } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const pinyonScript = Pinyon_Script({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon-script'
});
const imFellGreatPrimer = IM_Fell_Great_Primer({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-im-fell-great-primer'
});
const badScript = Bad_Script({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bad-script'
});

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
      <body className={`${inter.className} ${niconne.variable} ${pinyonScript.variable} ${imFellGreatPrimer.variable} ${badScript.variable}`}>
        {children}
      </body>
    </html>
  );
}

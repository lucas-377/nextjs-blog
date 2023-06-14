import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Red_Hat_Text } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const rh = Red_Hat_Text({ subsets: ['latin'] });

export const metadata = {
  title: 'Lucas Santana',
  description: 'Fullstack Next.js Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={rh.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

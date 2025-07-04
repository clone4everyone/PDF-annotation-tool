import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PDF Annotator - Professional PDF Annotation Tool',
  description: 'Annotate, highlight, and collaborate on PDF documents with ease. Professional-grade PDF annotation tool for teams and individuals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
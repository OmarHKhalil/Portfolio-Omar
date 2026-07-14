import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI & ML Engineer | Production-Ready Systems',
  description:
    'Recently graduated AI & Machine Learning engineer specializing in computer vision, generative AI, and production-grade systems. Explore my projects in machine learning, deep learning, and RAG systems.',
  openGraph: {
    title: 'AI & ML Engineer Portfolio',
    description:
      'Building production-ready AI systems with impact. Machine Learning, Computer Vision, and Generative AI expertise.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f1419" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

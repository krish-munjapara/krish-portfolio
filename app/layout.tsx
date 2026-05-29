import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: 'Krish Munjapara | Software Developer & Data Analytics',
  description: 'Final-year Computer Science Engineering student specializing in Big Data Analytics with practical experience in Python, SQL, Power BI, AI-powered applications, and full-stack development.',
  keywords: ['Software Developer', 'Data Analytics', 'AI Developer', 'Full Stack Developer', 'Python', 'React', 'Power BI', 'Machine Learning'],
  authors: [{ name: 'Krish Munjapara' }],
  creator: 'Krish Munjapara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Krish Munjapara | Software Developer & Data Analytics',
    description: 'Final-year CSE student specializing in Big Data Analytics. Building scalable software solutions and AI-powered applications.',
    siteName: 'Krish Munjapara Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krish Munjapara | Software Developer & Data Analytics',
    description: 'Final-year CSE student specializing in Big Data Analytics. Building scalable software solutions and AI-powered applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Rabiul Hossen | Frontend Developer',
  description: 'Creative Frontend Developer specializing in React, Next.js, and modern web technologies. Building beautiful, performant, and accessible web experiences.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Web Developer', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Rabiul Hossen' }],
  openGraph: {
    title: 'Rabiul Hossen | Frontend Developer',
    description: 'Creative Frontend Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="noise" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'glass',
              duration: 4000,
              style: {
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#1f2937',
                backdropFilter: 'blur(10px)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}

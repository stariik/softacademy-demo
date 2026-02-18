import type { Metadata } from 'next'
import { Inter, Noto_Sans_Georgian } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { ToastProvider } from '@/components/ui/Toast'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  display: 'swap',
  variable: '--font-georgian',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'SoftAcademy - ონლაინ კურსები',
    template: '%s | SoftAcademy',
  },
  description: 'შეიძინეთ პროფესიონალური კურსები საუკეთესო ლექტორებთან. ონლაინ სწავლება Google Meet-ის საშუალებით.',
  keywords: ['ონლაინ კურსები', 'სწავლება', 'პროგრამირება', 'დიზაინი', 'მარკეტინგი'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka" className={`${inter.variable} ${notoSansGeorgian.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased">
        <AuthProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

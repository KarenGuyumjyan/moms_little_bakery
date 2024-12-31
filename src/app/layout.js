import Header from '@/components/Header'
import './globals.css'
import { Great_Vibes, IBM_Plex_Serif } from 'next/font/google'
import { CounterProvider } from '@/utils/CounterContext'
import { ToastContainer } from 'react-toastify'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great',
  weight: '400',
})

const ibm = IBM_Plex_Serif({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-alumni',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: "Mom'sLittleBakery",
  images: [{ url: '../../public/moms_logo.png', width: 20, height: 20 }],
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href='/moms_logo.png' type='image/png' />
      <body className={`${greatVibes.className} ${ibm.className}`}>
        <CounterProvider>
          <Header />
          <ToastContainer />
          {children}
        </CounterProvider>
      </body>
    </html>
  )
}

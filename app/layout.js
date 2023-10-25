import { Inter } from 'next/font/google'

import './globals.css'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import CartProvider from './components/CartProvider'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Art Vandelay',
  description: 'Import Export',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

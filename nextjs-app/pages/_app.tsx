import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {CartContextProvider,CartContext}  from '@/context/CartContext';
import Header from '@/components/Header';
export default function App({ Component, pageProps }: AppProps) {  
  return (
    <div>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </div>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@primer/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider colorMode="day" preventSSRMismatch>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

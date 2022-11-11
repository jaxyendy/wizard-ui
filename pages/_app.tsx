import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp

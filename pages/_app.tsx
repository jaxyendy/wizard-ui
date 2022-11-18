import '../styles/globals.css'
import { NextIntlProvider } from 'next-intl'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import type { AbstractIntlMessages } from 'next-intl'


type MyAppProps = AppProps<{
  messages: AbstractIntlMessages
}>

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp

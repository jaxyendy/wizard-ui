import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl'
import { ChakraProvider } from '@chakra-ui/react'


type MyAppProps = {
  messages: AbstractIntlMessages
}

function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp

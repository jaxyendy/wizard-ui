import { useTranslations } from 'next-intl'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { WelcomeContent } from '../lib'
import { DefaultLink, DefaultHeadline } from '../components/Default'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const t = useTranslations('wizard')
  return (
    <div className={styles.container}>
      <Head>
        <title>Wizard UI</title>
        <meta
          name="description"
          content="Interface genérica para a contratação de qualquer coisa."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WelcomeContent
          newContractPath="/new"
          t={t}
          Headline={DefaultHeadline}
          Link={DefaultLink}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
interface StaticProps {
  locale: string
}
export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  }
}

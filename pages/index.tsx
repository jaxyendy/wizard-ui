import { useTranslations } from 'next-intl'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { WelcomeContent } from '../lib'
import { DefaultLink, DefaultHeadline } from '../components/Default'

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
export async function getStaticProps({ locale }: { locale:string }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  }
}

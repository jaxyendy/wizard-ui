import NextButton from '../../components/NextButton'

function WelcomeContent({ newContractPath, t, Headline, Link }) {
  return (
    <>
      <Headline title={t('title')} subtitle={t('subtitle')} />
      <NextButton Link={Link} href={newContractPath}>
        {t('contract')}
      </NextButton>
    </>
  )
}

export default WelcomeContent

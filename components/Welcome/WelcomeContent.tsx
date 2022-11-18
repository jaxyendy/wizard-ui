import NextButton from '../../components/NextButton'
import type { FunctionComponent } from 'react'
import type { HeadlineComponent, LinkComponent } from '../Default'

interface WelcomeContentProps {
  newContractPath: string,
  t: Function,
  Headline: HeadlineComponent,
  Link: LinkComponent,
}
export type WelcomeContentComponent = FunctionComponent<WelcomeContentProps>

function WelcomeContent({ newContractPath, t, Headline, Link }: WelcomeContentProps) {
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

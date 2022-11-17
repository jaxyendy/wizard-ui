import NextButton from '../../components/NextButton'
import { ReactNode, FunctionComponent } from 'react'
import type { HeadlineComponent, LinkProps } from '../Default'
import type { LinkComponent } from '../NextButton'

type WelcomeContentProps = {
  newContractPath: string,
  t: Function,
  Headline: HeadlineComponent,
  Link: LinkComponent,
}

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

import { Flex } from '@chakra-ui/react'
import { ReactNode, FunctionComponent } from 'react'

export type LinkComponent = FunctionComponent<{children: ReactNode, size: string, href: string}>

export interface NextButonProps {
  children: ReactNode,
  Link: LinkComponent,
  href: string,
}

function NextButton({children, Link, href, ...other}: NextButonProps) {
  return (
    <Flex my={'2.125rem'} justifyContent={'flex-end'}>
      <Link href={href} {...other} size="lg">
        {children}
      </Link>
    </Flex>
  )
}

export default NextButton

import { Flex } from '@chakra-ui/react'
import type { ReactNode, FunctionComponent } from 'react'
import type { LinkComponent } from './Default'

export interface NextButtonProps {
  children: ReactNode,
  Link: LinkComponent,
  href: string,
}
export type NextButtonComponent = FunctionComponent<NextButtonProps>

function NextButton({children, Link, href, ...other}: NextButtonProps) {
  return (
    <Flex my={'2.125rem'} justifyContent={'flex-end'}>
      <Link href={href} {...other} size="lg">
        {children}
      </Link>
    </Flex>
  )
}

export default NextButton

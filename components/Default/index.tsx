import { Heading, Button, Link } from '@chakra-ui/react'
import type { ReactNode, FunctionComponent } from 'react'

interface HeadlineProps {
  title: string,
  subtitle: string,
}
export type HeadlineComponent = FunctionComponent<HeadlineProps>

export function DefaultHeadline({ title, subtitle }: HeadlineProps) {
  return (
    <>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
      <Heading as="h2" size="md">
        {subtitle}
      </Heading>
    </>
  )
}

interface LinkProps {
  children: ReactNode,
  size?: string,
  href: string
}
export type LinkComponent = FunctionComponent<LinkProps>

export function DefaultLink({ children, ...other }: LinkProps) {
  return (
    <Button as={Link} {...other}>
      {children}
    </Button>
  )
}

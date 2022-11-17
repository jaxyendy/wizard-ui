import { Heading, Button, Link } from '@chakra-ui/react'
import { ReactNode, FunctionComponent } from 'react'

type HeadlineProps = {
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

export type LinkProps = {
  children: ReactNode
}

export function DefaultLink({ children, ...other }: LinkProps) {
  return (
    <Button as={Link} {...other}>
      {children}
    </Button>
  )
}

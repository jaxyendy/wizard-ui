import { Heading, Button, Link } from '@chakra-ui/react'

export function DefaultHeadline({ title, subtitle }) {
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

export function DefaultLink({ children, ...other }) {
  return (
    <Button as={Link} {...other}>
      {children}
    </Button>
  )
}

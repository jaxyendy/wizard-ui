import { Flex } from '@chakra-ui/react'

function NextButton({children, Link, ...other}) {
  return (
    <Flex my={'2.125rem'} justifyContent={'flex-end'}>
      <Link {...other} size="lg">
        {children}
      </Link>
    </Flex>
  )
}

export default NextButton

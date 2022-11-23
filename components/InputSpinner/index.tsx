import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInputProps,
  useNumberInput,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

export function InputSpinner({
  ...props
}: NumberInputProps) {
  const {step, defaultValue, min, width} = props

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: step || 1,
      defaultValue: defaultValue || 0,
      min: min || 0,
      ...props,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW={width || 'auto'}>
      <InputGroup>
        <InputLeftElement
          color={'neutral.400'}
          fontSize="small"
          ml={6}
          mt={1}
          {...dec}
        >
          <MinusIcon />
        </InputLeftElement>
        <Input
          textAlign="center"
          color={'neutral.400'}
          height={12}
          {...input}
        />
        <InputRightElement mr={6} mt={1} {...inc}>
          <AddIcon color="purple.500" fontSize="smaller" />
        </InputRightElement>
      </InputGroup>
    </HStack>
  )
}

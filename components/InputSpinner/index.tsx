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

interface Props {
  step?: number
  defaultValue?: number
  min?: number
  max?: number
  width?: number | string
  onChange: (valueAsString: string, valueAsNumber: number) => void
}

export default function InputSpinner({
  step,
  defaultValue,
  min,
  max,
  width,
  ...props
}: Props & NumberInputProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: step || 1,
      defaultValue: defaultValue || 0,
      min: min || 0,
      max: max || 10000,
      ...props,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW={width || '220px'}>
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
          {...input}
          textAlign="center"
          color={'neutral.400'}
          height="48px"
        />
        <InputRightElement {...inc} mr={6} fontWeight="700" mt={1}>
          <AddIcon color="purple.500" fontSize="smaller" />
        </InputRightElement>
      </InputGroup>
    </HStack>
  )
}

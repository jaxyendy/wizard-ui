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
  minusIcon?: React.ReactNode
  addIcon?: React.ReactNode
}

export function InputSpinner({ ...props }: Props & NumberInputProps) {
  const { step, defaultValue, min, max, width, minusIcon, addIcon } = props

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
    <HStack maxW={width || '224px'}>
      <InputGroup>
        <InputLeftElement
          color={'neutral.400'}
          fontSize="small"
          ml={3}
          mt={1}
          {...dec}
        >
          {minusIcon ? minusIcon : <MinusIcon />}
        </InputLeftElement>
        <Input
          textAlign="center"
          color={'neutral.400'}
          height={12}
          {...input}
        />
        <InputRightElement mr={3} mt={1} {...inc}>
          {addIcon ? addIcon : <AddIcon />}
        </InputRightElement>
      </InputGroup>
    </HStack>
  )
}

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
  const { step, defaultValue, min, width, minusIcon, addIcon } = props

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
        <InputLeftElement ml={3} mt={1} {...dec}>
          {minusIcon ? minusIcon : <MinusIcon fontSize="small" />}
        </InputLeftElement>
        <Input textAlign="center" height={12} {...input} />
        <InputRightElement mr={3} mt={1} {...inc}>
          {addIcon ? addIcon : <AddIcon fontSize="small" />}
        </InputRightElement>
      </InputGroup>
    </HStack>
  )
}

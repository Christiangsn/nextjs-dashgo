import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface IInputProps extends ChakraInputProps{
    name: string
    placeholder: string
    label?: string
} 

export function Input ({ name, label, placeholder, ...rest }: IInputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{placeholder}</FormLabel> }
            <ChakraInput 
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                {...rest}
            />         
       </FormControl>
    )
}
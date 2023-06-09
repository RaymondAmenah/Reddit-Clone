import { Flex } from '@chakra-ui/react'

const PageContent = ({ children }: any) => {
    return (
        <Flex justify='center' p='16px 0px'>
            <Flex
                width='95%'
                justify='center'
                max-width='660px'
            >
                <Flex
                    direction='column'
                    width={{ base: '100%', md: '65%' }}
                    mr={{ base: 0, md: 6 }}
                >
                    {children && children[0 as keyof typeof children]}
                </Flex>
                <Flex
                    direction='column'
                    display={{ base: 'none', md: 'flex' }}
                    flexGrow={1}

                >{children && children[1 as keyof typeof children]}</Flex>
            </Flex>
        </Flex>
    )
}

export default PageContent


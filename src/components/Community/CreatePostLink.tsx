import { Flex, Icon, Input } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { FaReddit } from "react-icons/fa"
import { IoImageOutline } from "react-icons/io5"
import { useSetRecoilState } from "recoil"
import { auth } from "../../Firebase/clientApp"
import { authModalState } from "../../atoms/authModalAtom"
import useDirectory from "../../hooks/useDirectory"


const CreatePostLink = () => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    const setAuthModalState = useSetRecoilState(authModalState)
    const { toggleMenuOpen } = useDirectory()
    const onClick = () => {
        if (!user) {
            setAuthModalState({ open: true, view: 'login' })
            return
        }
        const { communityId } = router.query

        if (!communityId) {
            toggleMenuOpen()
        }

        router.push(`/r/${communityId}/submit`)
    }
    return (
        <Flex
            justify='space-between'
            align='center'
            bg='white'
            height='56px'
            borderRadius={6}
            border='1px solid'
            borderColor='gray.300'
            p={2}
            mb={4}
            onClick={() => { onClick() }}
        >
            <Icon as={FaReddit} fontSize={36} color='gray.300' mr={5} />
            <Input
                placeholder='create post'
                fontSize='10pt'
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                bg='gray.50'
                borderColor='gray.200'
                height='36px'
                borderRadius={4}
                mr={4}
                onClick={onClick}
            />
            <Icon as={IoImageOutline} fontSize={24} mr={4} color='gray.400' cursor='pointer' />
        </Flex>
    )
}

export default CreatePostLink
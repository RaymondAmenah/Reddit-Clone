import { ChevronDownIcon } from "@chakra-ui/icons"
import { Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { User, signOut } from "firebase/auth"
import { CgProfile } from "react-icons/cg"
import { FaRedditSquare } from "react-icons/fa"
import { IoSparkles } from "react-icons/io5"
import { MdOutlineLogin } from "react-icons/md"
import { VscAccount } from "react-icons/vsc"
import { useSetRecoilState } from "recoil"
import { auth } from "../../../Firebase/clientApp"
import { authModalState } from "../../../atoms/authModalAtom"
import { communityState } from "../../../atoms/communitiesAtom"

type UserMenuProps = {
    user?: User | null
}
const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const resetCommunityState = useSetRecoilState(communityState)
    const setAuthModalState = useSetRecoilState(authModalState)

    const logOut = async () => {
        await signOut(auth)
        resetCommunityState
        //clear community state
    }

    return (
        <Menu>
            <MenuButton
                cursor='pointer'
                padding='0px 6px'
                borderRadius={4}
                _hover={{
                    outline: '1px solid',
                    outlineColor: 'gray.200'
                }}>
                <Flex align='center'>
                    <Flex align='center'>
                        {user ? (
                            <>
                                <Icon
                                    as={FaRedditSquare}
                                    mr={1}
                                    color='gray.300'
                                    fontSize={24}
                                />
                                <Flex
                                    direction='column'
                                    display={{ base: 'none', lg: 'flex' }}
                                    fontSize='8pt'
                                    align='flex-start'
                                    mr={3}
                                >
                                    <Text fontWeight={700}>
                                        {user?.displayName || user.email?.split('@')[0]}
                                    </Text>
                                    <Flex>
                                        <Icon as={IoSparkles} color='brand.100' mr={1} />
                                        <Text color='gray.400'>1 karma</Text>
                                    </Flex>
                                </Flex>
                            </>

                        ) : (<Icon
                            as={VscAccount}
                            fontSize={24}
                            color='gray.400'
                            mr={1} />)}
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList>
                {user ? (
                    <>
                        <MenuItem
                            fontSize='10pt'
                            fontWeight={700}
                            _hover={{ bg: 'blue.500', color: 'white' }}
                        >
                            <Flex align='center'>
                                <Icon as={CgProfile} mr={2} fontSize={20} />
                                Profile
                            </Flex>
                        </MenuItem>
                        <MenuItem
                            fontSize='10pt'
                            fontWeight={700}
                            _hover={{ bg: 'blue.500', color: 'white' }}
                            onClick={logOut}
                        >
                            <Flex align='center'>
                                <Icon as={MdOutlineLogin} mr={2} fontSize={20} />
                                Log out
                            </Flex>
                        </MenuItem>
                    </>
                ) : (
                    <MenuItem
                        fontSize='10pt'
                        fontWeight={700}
                        _hover={{ bg: 'blue.500', color: 'white' }}
                        onClick={() => setAuthModalState({ open: true, view: 'login' })}
                    >
                        <Flex align='center'>
                            <Icon as={MdOutlineLogin} mr={2} fontSize={20} />
                            Log In / Sign Up
                        </Flex>
                    </MenuItem>
                )}


            </MenuList >
        </Menu >
    )
}

export default UserMenu
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Stack, useColorMode} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


function navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <>
        <header>
            <Box display="flex" justifyContent='space-between' alignItems="center"
                backgroundColor="black">
                <Box>
                    <Stack direction={['column', 'row']}>
                        <Button size="lg" variant="outline" pr={3} pl={3} color="white" backgroundColor="blue.400" fontSize="medium" >Home
                        </Button>
                        <Button size="lg" variant="outline" pr={3} pl={3} color="white" backgroundColor="blue.400" fontSize="medium" >About me
                        </Button>
                        <Button size="lg" variant="outline" pr={3} pl={3} color="white" backgroundColor="blue.400" fontSize="medium" >Projects
                        </Button>

                    </Stack>
                </Box>

                <Box align>
                    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                        Twitter
                    </Button>
                    <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
                        LinkedIn
                    </Button>
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </Box>
            </Box>
        </header>
    </>
}

export default navbar;
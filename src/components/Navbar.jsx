/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, ButtonGroup, Link, Stack, useColorMode} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';


function navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <>
        <header>
            <Box display='flex' backgroundColor="black">
                <Stack>
                    <ButtonGroup placeContent='stretch'>
                        <Button  variant='ghost' color="white" fontSize="medium" >Home
                        </Button>
                        <Button  variant='ghost' color="white" fontSize="medium" >About me
                        </Button>
                        <Button  variant='ghost' color="white" fontSize="medium" >Projects
                        </Button>
                        <Button colorScheme='linkedin' variant='ghost' leftIcon={<FaLinkedin />}>
                            LinkedIn <Link href=""></Link>
                        </Button>
                        <Button colorScheme='github' variant='ghost' leftIcon={<FaGithub />}></Button>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                        </Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </header>
    </>
}

export default navbar;
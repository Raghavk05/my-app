import { Box, Button, Flex, Link, Spacer, useColorMode} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Links() {
    const { colorMode, toggleColorMode } = useColorMode();
    return<>
    <header>
                    <Box>
                        <Button colorScheme='linkedin' variant='ghost' leftIcon={<FaLinkedin />}>
                            LinkedIn <Link href=""></Link>
                        </Button>
                        <Button colorScheme='github' variant='ghost' leftIcon={<FaGithub />}></Button>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                        </Button>
                     </Box>   
                    </header>
                    </>
}

export default Links;
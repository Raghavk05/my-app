import { Box, Button, Stack } from "@chakra-ui/react";
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';

function navbar() {
    return <>
    <header>
        <Box display="flex" justifyContent='space-between' alignItems="center" 
        backgroundColor="black">
            <Box>
            <Stack direction={['column', 'row']} spacing='24px'>
            <Button size="lg" variant="outline" pr={3} pl={3} color="red.600" backgroundColor="blue.400" fontSize="medium" >Home
                </Button>
            
            
            <Button size="lg" variant="outline" pr={3} pl={3} color="red.600" backgroundColor="blue.400" fontSize="medium" >Contact
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
            </Box>
        </Box>
    </header>
    </>
}

export default navbar;
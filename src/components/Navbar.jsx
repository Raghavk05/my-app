/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Spacer} from "@chakra-ui/react";
import LinkBar from "./Links";
import NavPages from "./NavPages";


function navbar() {
    return <>
        <header>
            <Box display='flex' backgroundColor="black">
            <Box>
                <NavPages />
            </Box>
            <Spacer/>
            <Box>
                <LinkBar />
            </Box>
            </Box>
        </header>
    </>
}

export default navbar;
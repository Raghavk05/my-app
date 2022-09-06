import { Box, Button, Spacer} from "@chakra-ui/react";

function navpages() {
    return<>
        <header>
        <Box>
            <Button  variant='ghost' color="white" fontSize="medium" >Home
                        </Button>
            <Button  variant='ghost' color="white" fontSize="medium" >About me
                        </Button>
            <Button  variant='ghost' color="white" fontSize="medium" >Projects
                        </Button>
        </Box>
        </header>
    </>
}


export default navpages;
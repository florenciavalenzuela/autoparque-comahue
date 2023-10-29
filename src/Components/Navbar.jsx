import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Spacer ,Box

} from '@chakra-ui/react'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
        <div>

            <Flex>
                <Box p='4' bg='red.400'>
                    <h3>Autoparque Comahue</h3>
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    <Menu>
                        <MenuButton>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget/>
                </Box>
            </Flex>    

        </div>
    )
}

export default Navbar
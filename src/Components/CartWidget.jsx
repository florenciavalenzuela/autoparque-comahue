import { SunIcon } from '@chakra-ui/icons'
import { Divider, Flex, Box  } from '@chakra-ui/react'
import React from 'react'



const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
                <SunIcon/>
            </Box>
            <Divider/>
            <Box>
                <p>2</p>
            </Box>

        </Flex>
        
    
    </div>
    
  )
}

export default CartWidget
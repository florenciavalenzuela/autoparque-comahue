import React from 'react'

const Navbar = () => {
  return (
        <div>
            <h3>Autoparque Comahue</h3>
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
        </div>
    )
}

export default Navbar
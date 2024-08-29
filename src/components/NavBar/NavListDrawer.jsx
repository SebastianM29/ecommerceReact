import { AddShoppingCart } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavListDrawer = ({navLinks}) => {
  
  return (
    <Box sx={{
        
        width:250,
        height:"100% ",
        backgroundColor:"orangered"
    }}>
    <nav>

      { navLinks.map((item) =>
        <List key={item.title}>
         <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddShoppingCart/>
              </ListItemIcon>
              <ListItemText primary={item.title}/>
          </ListItemButton>
        </ListItem>            
        </List>
      )}
      <Divider/>
      <CartWidget/>




    
    

    </nav>
    </Box>
  )
}

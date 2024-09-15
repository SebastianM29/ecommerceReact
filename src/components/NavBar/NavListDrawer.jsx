import { AddShoppingCart } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { CartWidget } from "../CartWidget/CartWidget"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


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
            <ListItemButton component={Link}to={`/category/${item.href}`}>
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

NavListDrawer.propTypes= {
navLinks : PropTypes.arrayOf( PropTypes.shape({
 title: PropTypes.string.isRequired
}))
}
import { AddShoppingCart } from '@mui/icons-material'
import {  List, ListItem, ListItemIcon } from '@mui/material'

export const CartWidget = () => {
  return (
    <List>
        <ListItem>
         <ListItemIcon>
            <AddShoppingCart/>
            <strong style={{color:"yellow", fontSize:25}}>3</strong>
         </ListItemIcon>
        </ListItem>
    </List>
  )
}

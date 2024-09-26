import { AddShoppingCart } from '@mui/icons-material'
import {  IconButton, List, ListItem, ListItemIcon } from '@mui/material'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const{cantidadTotal}=useContext(CarritoContext)
  return (
    <List>
        <ListItem>
         <ListItemIcon >
          <IconButton component={Link} to={"/cart"} >
          <AddShoppingCart />
          </IconButton>
          {
            cantidadTotal > 0 &&   <strong style={{color:"yellow", fontSize:25}}>{cantidadTotal}</strong>
          }
         </ListItemIcon>
        </ListItem>
    </List>
  )
}

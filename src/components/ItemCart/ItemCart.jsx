import { Box, Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export const ItemCart = ({item,cantidad}) => {
    const{eliminarProd}=useContext(CarritoContext)
  return (
    <Box>
     
    
     <Typography>{item.nombre}</Typography>
     <Typography variant='h6'>Precio: ${item.precio}</Typography>
     <Typography>Unidades: {cantidad}</Typography>
     <Button onClick={() => eliminarProd(item.id)} variant={"outlined"}  color='error' >Eliminar producto</Button>
    </Box>
  )
}

import { Box, Button, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useCounter } from '../../hooks/useCounter'

export const ItemCart = ({item,cantidad}) => {
    const{eliminarProd,agregarAlCarrito,actualizarCarrito}=useContext(CarritoContext)
    
    const {counter,suma:aumentar,rest}=useCounter(cantidad)
    
  useEffect(() => {
    update(item,counter)
 
  }, [counter])
  
   const update=(item,counter) => {
    actualizarCarrito(item,counter)
   }

    
  return (
    <Box>
     
    
     <Typography>{item.nombre}</Typography>
     <Typography variant='h6'>Precio: ${item.precio}</Typography>
     <Typography>Unidades: {counter}</Typography>
     <Box>
     <Button color='warning' variant='contained' onClick={()=>rest(item.stock)}>-</Button>
     <Button color='warning' variant='contained' onClick={()=>aumentar(item.stock)} sx={{marginLeft:"5px"}}>+</Button>

     </Box>
     <Button onClick={() => eliminarProd(item.id)} variant={"outlined"}  color='error'  sx={{marginTop:"5px"}}>Eliminar producto</Button>
    </Box>
  )
}

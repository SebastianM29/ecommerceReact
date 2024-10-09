import { Box, Button, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useCounter } from '../../hooks/useCounter'
import { CustomDialog } from '../CustomDialog/CustomDialog'

export const ItemCart = ({item,cantidad}) => {
    const{eliminarProd,agregarAlCarrito,actualizarCarrito}=useContext(CarritoContext)
    const {counter,suma:aumentar,rest}=useCounter(cantidad)

    const[dialog,setDialog] = useState(false)

    const handleDelete = () => {
      setDialog(true)
    }

    const handleConfirmDelete = () => {
      setDialog(false)
      eliminarProd(item.id)

    }

    const handleCloseDialog = () => {
      setDialog(false); // Cerrar el diálogo sin eliminar
    };
    
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
     <Button onClick={handleDelete} variant={"outlined"}  color='error'  sx={{marginTop:"5px"}}>Eliminar producto</Button>
     <CustomDialog
     open={dialog}
     handleCloseDialog={handleCloseDialog}
     handleConfirmDelete={handleConfirmDelete}
     title="Eliminar producto"
     description="¿Estás seguro de que deseas eliminar este producto del carrito?"
     />
    </Box>
  )
}

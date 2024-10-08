import { Button, Card, CardActions, CardContent, CardMedia, Grid, Snackbar, SnackbarContent, Typography } from "@mui/material"
import { useCounter } from "../../hooks/useCounter"
import { Link } from "react-router-dom"
import { Counter } from "../Counter/Counter"
import { useState } from "react"
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext"

export const ItemDetail = ({id,nombre,precio,imagePath,stock}) => {
  
  const [cantidad,setCantidad] = useState(0)
  const[open,setOpen] = useState(false)
  const{counter,suma,rest}=useCounter(0)
  const {agregarAlCarrito} = useContext(CarritoContext)
 
  
  const agregar = (val) => {
    
    if (val !== 0) {
      
      setCantidad(val)
      
      const item={id,nombre,precio,stock}
      agregarAlCarrito(item,val)
      setOpen(true)
    }
  }

  const handleClose = () => {
     setOpen(false)
  }
 
  return (

    <Grid item xs={8} sm={8} md={6}  sx={{marginTop:"50px"}}>


   <Card>
    <CardMedia
        component={"img"}
        image={imagePath}
        height={400}
        alt="una imagen"
    />
    <CardContent> 


      <Typography variant="h5">{nombre}</Typography>
      <Typography variant="h3">${precio}</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo expedita eveniet minima, optio ex ut possimus error hic non pariatur tenetur? Error placeat sapiente, nesciunt temporibus illo quis! Ducimus.</Typography>
        
    </CardContent>
   
    {
      cantidad > 0 ? ( 
      <>
      <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      >
        <SnackbarContent
        sx={{ backgroundColor:"orange"}}
        message="Producto Agregado"
        />
        
      </Snackbar>  
      <Button component={Link} to={"/cart"} >  terminar compra </Button>
      <Button sx={{color:"orange"}} component={Link} to={"/"} >  seguir comprando </Button> </>)
      :
      
      (<Counter stock = {stock} counter = {counter} suma ={suma} rest = {rest} agregar={agregar}/>)
    }




   </Card>




    </Grid>
  )
}

import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Box, Button, Grid, Grid2, Typography } from "@mui/material"
import { ItemCart } from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"






export const Cart = () => {
    const{carrito,total,cantidadTotal,vaciarCarrito}=useContext(CarritoContext)
    carrito.forEach(element => {
        console.log(element);
    });
    
  return (
    <>

        <Box sx={{
            width:"100%",
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            justifyContent:"center"}}>
        <Box sx={{ 
            marginTop:"200px",
             padding:"20px",
            width:"400px",
            minHeight:200,
            color:"orange",backgroundColor:"#E85C0D",
            border:"none",
            borderRadius:"20px",
            boxShadow: 5

            }}>

    {(cantidadTotal === 0) ?(
        <Box sx={{display:"flex",minHeight:"200px" , flexFlow:"column",justifyContent:"space-between" }}>
        <Typography sx={{marginTop:"20px"}}>
            No hay productos en el carrito

        </Typography>
        <Button component={Link} variant="contained" to={"/"}  color="warning">Volver a Productos</Button>
        </Box>
    ):
    (   
    
        <>
        <Grid >
            {carrito.map(element => 
            
            <Grid2 key = {element.item.id} >
            
            <ItemCart  {...element}/>
        
            </Grid2>
        
        )}
        </Grid>
        <Box sx={{marginTop:"50px"}}>
           <Typography variant={"body2"}>Cantidad de productos {cantidadTotal}</Typography>
           <Typography variant={"h6"}>Importe total: ${total}</Typography>
           <Button sx={{marginTop:"20px",display:"block"}} variant="contained" color="warning" onClick={vaciarCarrito}>Vaciar Carrito</Button>
           <Button sx={{marginTop:"20px"}} component={Link} variant="contained" to={"/checkout"}  color="success" >Finalizar compra</Button>
           
        </Box>
        </>
       
    )
    }

    </Box>
    </Box>
    </>
  )
}

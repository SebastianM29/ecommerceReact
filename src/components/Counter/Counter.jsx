import { Button, CardActions, Typography } from "@mui/material"



export const Counter = ({stock,suma,rest,counter,agregar}) => {
  
  console.log('en el counter',stock);
  
  return (
    <CardActions >

    <Button onClick={()=>{rest()}} variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>-</Button>
    <Typography>{counter}</Typography>
    <Button onClick={()=>{suma(stock)}} variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>+</Button>
   <Button variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}} onClick={() =>{agregar(counter)}}>Agregar al carrito</Button>
   </CardActions>
  )
}

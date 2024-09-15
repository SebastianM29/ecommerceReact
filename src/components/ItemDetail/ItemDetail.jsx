import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useCounter } from "../../hooks/useCounter"

export const ItemDetail = ({id,nombre,precio,imagePath}) => {
  const{counter,suma,rest}=useCounter(0)
 
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
    <CardActions >

     <Button onClick={()=>{rest()}} variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>-</Button>
     <Typography>{counter}</Typography>
     <Button onClick={()=>{suma()}} variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>+</Button>
    <Button variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>Agregar al carrito</Button>

    </CardActions>



   </Card>




    </Grid>
  )
}

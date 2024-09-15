
import  PropTypes  from "prop-types";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export const Item = ({id,nombre,imagePath}) => {
  return (

    <>
    
    <Grid item xs={12} sm={6} md={3} >
  
  <Card
  
  sx={{
  boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
  borderRadius:"0",
  transition: "0.2s",
  ":hover":{
      transform:"scale(1.05)",
    
  }
  
  }}
  >
      <CardActionArea>
    <CardMedia 
    component={"img"}
    image={imagePath}
    height={200}
    alt="una imagen"
    
    />
  
    <CardContent>
   
      <Typography variant="h5">{nombre}</Typography>
 
  
    </CardContent>
    
    </CardActionArea>
    <CardActions>
      <Button component={Link} to={`/item/${id}`} variant="contained" sx={{borderRadius:"0",backgroundColor:"orange"}}>Ver Detalles</Button>
    </CardActions>
  
  </Card>

</Grid>
    
  
    
    </>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired

}

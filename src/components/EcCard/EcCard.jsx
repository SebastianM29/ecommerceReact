import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const EcCard = () => {
  return (
<Card
sx={{
transition: "0.2s",
":hover":{
    transform:"scale(1.05)"
}

}}
>
    <CardActionArea>
  <CardMedia 
  component={"img"}
  image="https://via.placeholder.com/1000x200"
  height={200}
  alt="una imagen"
  
  />

  <CardContent>
    <Typography variant="h5">Titulo</Typography>
    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni facilis modi illum a hic ipsa provident corporis dolorum consequuntur perferendis, quas ea non officia aliquid asperiores delectus maxime possimus cupiditate.</Typography>

  </CardContent>
  
  </CardActionArea>
  <CardActions>
    <Button variant="contained">Agregar alcarrito</Button>
  </CardActions>

</Card>
)
}

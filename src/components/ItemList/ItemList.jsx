import PropTypes from "prop-types";

import { Box, Grid, Typography } from "@mui/material"
import { Item } from "../Item/Item"
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

export const ItemList = ({products}) => {
   const [loading,setLoading] = useState(true)
   useEffect(() => {
     if (products.length > 0) {
      setLoading(false)
     }
   
   
   }, [products])
   
  return (
    <>
     {loading? (
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
       <CircleLoader color="#ef811c" size={100}/>
        <Typography sx={{marginLeft:"20px"}} variant="body1" color="#ef811c">Cargando...</Typography>
      </Box> ):
     (<Grid container spacing={5} sx={{marginTop:"15px",padding:"0px 50px 0px 50px"}}>
         
           {products?.map(item => <Item key={item.id} {...item}/>)}
     </Grid>)

    }
    
    </>
  )
}


ItemList.propTypes = {
    products : PropTypes.array
}

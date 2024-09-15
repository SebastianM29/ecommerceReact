import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Grid } from "@mui/material"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
   const [prod,setProd] = useState(null)
   const{id} = useParams()

   
   
  useEffect(() => {
   const fetchDetailById = async () => {
       const data = await getProductsById(JSON.parse(id))
       setProd(data)
   }
   fetchDetailById()
  }, [id])
  

  return (
    <>
    <Grid container spacing={2} sx={{justifyContent:"center"}} >


    <ItemDetail {...prod}/>
    </Grid>
    </>
  )
}

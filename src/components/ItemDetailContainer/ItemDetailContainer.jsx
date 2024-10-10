import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Grid } from "@mui/material"
import { useParams } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../services/configDB"

export const ItemDetailContainer = () => {
   const [prod,setProd] = useState(null)
   const{id} = useParams()


   
   useEffect(() => {
    const resp = doc(db,"productos",id)

   
    
    const result = async() => {
      const resultProducts = await getDoc(resp)


      const value = resultProducts.data()


      const resultProductsWhitId = {
        id:resultProducts.id ,...value
      }
      
      setProd(resultProductsWhitId)
    }
    result()
   }, [id])
   


  return (
    <>
    <Grid container spacing={2} sx={{justifyContent:"center"}} >


    <ItemDetail {...prod}/>
    </Grid>
    </>
  )
}

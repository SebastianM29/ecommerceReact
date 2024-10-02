
import { useEffect, useState } from "react";
// import { getCategoryProd, getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useCategoryMessage } from "../../hooks/useCategoryMessage";
import { Typography } from "@mui/material";
import { db } from "../../services/configDB";
import { collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
const [products,setProducts] = useState([])
const {idCat} = useParams()

const valueMessage = useCategoryMessage(idCat)

 useEffect(() => {
  const result = idCat ? query(collection(db,"productos"),where("cat" ,"==",idCat)):collection(db,"productos");
  const res = async () => {
    const resultProducts = await getDocs(result)
    const resultProductsWhitId = resultProducts.docs.map(element => {
      const data = element.data() 
      return {id:element.id , ...data}
    })
    setProducts(resultProductsWhitId)
  }
  res()
 }, [idCat])
 


  


  
  
  return (
    <>
     
     <Typography variant="body1" sx={{display:"flex" , justifyContent:"center", marginTop:"20px" ,marginBottom:"60px"}}>{valueMessage}</Typography>
    
    <ItemList products = {products} />
    
    </>

  )
}










import { useEffect, useState } from "react";
import { getCategoryProd, getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useCategoryMessage } from "../../hooks/useCategoryMessage";
import { Typography } from "@mui/material";


export const ItemListContainer = () => {
const [products,setProducts] = useState([])
const {idCat} = useParams()

const valueMessage = useCategoryMessage(idCat)




  

  useEffect( () => {
    
   
    const fetchProducts = async () => {
      const result = idCat ? await getCategoryProd(idCat): await getProducts();
      setProducts(result);
  };
  fetchProducts();
  
  }, [idCat])

  
  
  return (
    <>
     
     <Typography variant="body1" sx={{display:"flex" , justifyContent:"center", marginTop:"20px" ,marginBottom:"60px"}}>{valueMessage}</Typography>
    
    <ItemList products = {products} />
    
    </>

  )
}









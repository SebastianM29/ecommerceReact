import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext, useState } from "react"
import { db } from "../../services/configDB"
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"

export const Checkout = () => {
  
    const [ordenId , setOrdenId] = useState("")
    const [errors,setErrors] = useState({})
    const {carrito,total,vaciarCarrito}=useContext(CarritoContext)
    const{name,lastName,telephone,email,repeateEmail,onInputChange,resetForm}=useForm({name:"",lastName:"",telephone:"",email:"",repeateEmail:""})
    

      const handleSubmit = async(e) => {
       let formErrors = {}
       e.preventDefault();
     
       
       try {

        if (email !== repeateEmail) {
          formErrors.repeatEmail = "Email distinto, verifique"
          
        
        }

        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors)
          return
        }
        
        setErrors({}); 

   
 
        const order = {
         items: carrito.map((element)=>({
         id: element.item.id,
         nombre: element.item.nombre,
         precio:element.item.precio,
         cantidad: element.cantidad
         })),
         total,
         fecha: new Date(),
         name,
         lastName,
         telephone,
         email
        
        }

       
       const ord = await addDoc(collection(db,"ordenes"),order)

       
       order.items.map(async(element) => {
         const productRef =  doc(db,"productos",element.id)
         const prodDoc = await getDoc(productRef)
         const stock = prodDoc.data().stock

         await updateDoc(productRef,{
          stock: stock - element.cantidad
         })
         


       })


       setOrdenId(ord.id)
       vaciarCarrito()
       resetForm()
        
       } catch (error) {
        console.log("error",error);
        
       }
   
    
      }

  return (
    <>
    <Grid2 container spacing={2}>
      <Grid2 size={{xs:12,sm:7,md:3}}>
           
       <Box 
    component="form"
   
    sx={{
        display:"flex",
        justifyContent:"center",
        marginTop:"125px",
        marginLeft:"20px",
        flexFlow:"column",
        width:"70%",
        minHeight:300,
        backgroundColor:"#F2B749",
        padding:"20px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px 3px rgba(0, 0, 0, 0.5)"
    }}
     onSubmit={handleSubmit}
    >
      
        <TextField 
     sx={{marginTop:"10px"}}
     type="text"
     label="nombre"
     name="name"
     required
     value={name}
     onChange={onInputChange}
     
     >
        
     </TextField>
     <TextField 
      sx={{marginTop:"10px"}}
     type="text"
     label="Apellido"
     name="lastName"
     required
     value={lastName}
     onChange={onInputChange}
     
     >
        
     </TextField>
     
     <TextField 
     sx={{marginTop:"10px"}}
     type="text"
     label="Telefono"
     name="telephone"
     required
     value={telephone}
     onChange={onInputChange}
     
     >
        
     </TextField>
     <TextField 
     sx={{marginTop:"10px"}}
     type="email"
     label="email"
     name="email"
     required
     value={email}
     onChange={onInputChange}
     
     >
     </TextField>
     <TextField 
     sx={{marginTop:"10px"}}
     type="email"
     label="repetir email"
     name="repeateEmail"
     required
     error={!!errors.repeatEmail}
     helperText={errors.repeatEmail}
     value={repeateEmail}
     onChange={onInputChange}
     
     >
     </TextField>
      <Button sx={{marginTop:"10px"}} type="submit" color="warning" variant="contained">comprar</Button>
      {
        ordenId && (
          <Typography> Compra realizada Nº de Orden: {ordenId}</Typography>
        )
      }

    
     </Box>


      </Grid2>
      <Grid2 size={{xs:12,sm:12, md:9}} sx={{padding:"20px"}}>
       <Box sx={{minHeight:"400px", marginTop:"100px",backgroundColor:"#F2B749",boxShadow:5,borderRadius:"10px",padding:"5px"}}>
      <Box sx={{ display: "flex", marginTop: "10px",color:"white",justifyContent:"space-between", fontWeight: "bold" }}>
      <Typography variant="h5" sx={{flex:1 ,marginLeft:"10px"}}>Producto</Typography>
      <Typography variant="h5" sx={{flex:1 ,marginLeft:"10px"}}>Cantidad</Typography>
      <Typography variant="h5" sx={{flex:1 ,marginLeft:"10px"}}>Precio Unitario</Typography>
      <Typography variant="h5" sx={{flex:1 ,marginLeft:"10px"}}>Total</Typography>
       </Box>
      {
      carrito.map(element => (
        <Box key={element.item.id} sx={{marginTop:"20px" ,display:"flex",justifyContent:"space-between"}}>
        <Typography variant="body2" sx={{flex:1,marginLeft:"10px"}}>{element.item.nombre}</Typography>
        <Typography variant="body2" sx={{flex:1,marginLeft:"10px"}}>{element.cantidad}</Typography>
        <Typography variant="body2" sx={{flex:1,marginLeft:"10px"}}>{element.item.precio}</Typography>
        <Typography variant="body2" sx={{flex:1,marginLeft:"10px"}}>Precio Total: {element.item.precio * element.cantidad}</Typography>
        </Box>
        


      ))

      
    }
    <Typography variant ={"body1"} sx={{marginTop:"50px",textAlign:"end",marginRight:"50px",color:"orangeRed"}}>Total: {total}</Typography>
    </Box> 
      </Grid2>
    </Grid2>
   
    
    </>



  )
}

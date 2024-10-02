import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext, useState } from "react"
import { db } from "../../services/configDB"
import { addDoc, collection } from "firebase/firestore"

export const Checkout = () => {
    //name,apellido,telefono,email,emailconfirmacion
    // name:"",
    // lastName:"",
    // telephone:""
    const [ordenId , setOrdenId] = useState("")
    const {carrito,total,vaciarCarrito}=useContext(CarritoContext)

    console.log(carrito);
    
      const{name,lastName,telephone,email,onInputChange}=useForm({name:"",lastName:"",telephone:"",email:""})

      const handleSubmit = async(e) => {
     
       e.preventDefault();
       try {
        console.log(name);
        console.log("submit");
 
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
       console.log(order);
       
       const ord = await addDoc(collection(db,"ordenes"),order)
       setOrdenId(ord.id)
       vaciarCarrito()
        
       } catch (error) {
        console.log("error",error);
        
       }
   
       
      }

  return (
    <>
    <Grid2 container spacing={2}>
      <Grid2 size={{sm:4}}>
           
       <Box 
    component="form"
    sx={{
        display:"flex",
        justifyContent:"center",
        marginTop:"100px",
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
      <Button sx={{marginTop:"10px"}} type="submit" color="warning" variant="contained">comprar</Button>
      {
        ordenId && (
          <Typography> Compra realizada Nº de Orden: {ordenId}</Typography>
        )
      }

    
     </Box>


      </Grid2>
      <Grid2 size={{sm:8}} sx={{padding:"20px"}}>
       <Box sx={{marginTop:"100px",backgroundColor:"#F2B749",boxShadow:5,borderRadius:"10px",padding:"5px"}}>
      <Box sx={{ display: "flex", marginTop: "10px",color:"white",justifyContent:"space-between", fontWeight: "bold" }}>
      <Typography sx={{flex:1}}>Producto</Typography>
      <Typography sx={{flex:1}}>Cantidad</Typography>
      <Typography sx={{flex:1}}>Precio Unitario</Typography>
      <Typography sx={{flex:1}}>Total</Typography>
       </Box>
      {
      carrito.map(element => (
        <Box key={element.item.id} sx={{marginTop:"20px" ,display:"flex",justifyContent:"space-between"}}>
        <Typography variant="body1" sx={{flex:1}}>{element.item.nombre}</Typography>
        <Typography variant="body1" sx={{flex:1}}>{element.cantidad}</Typography>
        <Typography variant="body1" sx={{flex:1}}>{element.item.precio}</Typography>
        <Typography variant="body1" sx={{flex:1}}>Precio Total: {element.item.precio * element.cantidad}</Typography>
        </Box>


      ))
      
    }
    </Box> 
      </Grid2>
    </Grid2>
   
    
    </>


    // <Box 
      

    // sx={{
    //     display:"flex",
    //     justifyContent:"center",
    //     marginTop:"150px",
    
        

    // }}>
    // <Box 
    // component="form"
    // sx={{
    //     display:"flex",
    //     justifyContent:"center",
    //     flexFlow:"column",
    //     width:400,
    //     minHeight:300,
    //     backgroundColor:"beige",
    //     padding:"20px"
        

    // }}
    //  onSubmit={handleSubmit}
    // >
      
   

    //   <Grid2 container spacing={2}>
    //     <Grid2 item xs={3}>

    //     <TextField 
    //  sx={{marginTop:"10px"}}
    //  type="text"
    //  label="nombre"
    //  name="name"
    //  value={name}
    //   onChange={onInputChange}
     
    //  >
        
    //  </TextField>
    //  <TextField 
    //   sx={{marginTop:"10px"}}
    //  type="text"
    //  label="Apellido"
    //  name="lastName"
    //  value={lastName}
    //   onChange={onInputChange}
     
    //  >
        
    //  </TextField>
     
    //  <TextField 
    //  sx={{marginTop:"10px"}}
    //  type="text"
    //  label="Telefono"
    //  name="telephone"
    //  value={telephone}
    //   onChange={onInputChange}
     
    //  >
        
    //  </TextField>
    //  <TextField 
    //  sx={{marginTop:"10px"}}
    //  type="text"
    //  label="email"
    //  name="email"
    //  value={email}
    //  onChange={onInputChange}
     
    //  >
        
    //  </TextField>



    //     </Grid2>
    //     <Grid2 item xs={9}>
    //     {
    //   carrito.map(element => (
    //     <Typography key={element.id}>{element.item.nombre}</Typography>
    //   ))
    // }
    //     </Grid2>



    //   </Grid2>


   




    //  <Grid2 item xs={12}>

    //  <Button type="submit" variant="outlined">comprar</Button>


    //  </Grid2>
    // </Box>
    // </Box>
  )
}

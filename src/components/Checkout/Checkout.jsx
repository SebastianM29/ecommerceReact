import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

export const Checkout = () => {
    //name,apellido,telefono,email,emailconfirmacion
    // name:"",
    // lastName:"",
    // telephone:""
    const {carrito}=useContext(CarritoContext)
    console.log(carrito);
    
      const{name,lastName,telephone,email,onInputChange}=useForm({name:"",lastName:"",telephone:"",email:""})

      const handleSubmit = (e) => {
       e.preventDefault();
       console.log(name);
       console.log("submit");
       
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
       
        minHeight:300,
        backgroundColor:"beige",
        padding:"30px"
        

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




   




    

      <Button type="submit" variant="outlined">comprar</Button>


    
     </Box>


      </Grid2>
      <Grid2 size={{sm:8}} sx={{padding:"20px"}}>
       <Box sx={{marginTop:"100px",backgroundColor:"orange",padding:"10px"}}>
      <Box sx={{ display: "flex", marginTop: "10px",justifyContent:"space-between", fontWeight: "bold" }}>
      <Typography sx={{flex:1}}>Producto</Typography>
      <Typography sx={{flex:1}}>Cantidad</Typography>
      <Typography sx={{flex:1}}>Precio Unitario</Typography>
      <Typography sx={{flex:1}}>Total</Typography>
       </Box>
      {
      carrito.map(element => (
        <Box key={element.id} sx={{marginTop:"50px" ,display:"flex",justifyContent:"space-between"}}>
        <Typography sx={{flex:1}}>{element.item.nombre}</Typography>
        <Typography sx={{flex:1}}>{element.cantidad}</Typography>
        <Typography sx={{flex:1}}>{element.item.precio}</Typography>
        <Typography sx={{flex:1}}>Precio Total: {element.item.precio * element.cantidad}</Typography>
        <Typography ></Typography>
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

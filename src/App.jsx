import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"
import { Box, Typography } from "@mui/material"






export const App = () => {
  
  return (
    <>
    <CarritoProvider>
    <NavBar/>
    <div style={{ height: 70 }} /> 
   
     <Outlet />
     <Box
     component="footer"
     sx={{
    
      padding: '20px',
      textAlign: 'center',
      marginTop:"150px",
      bottom: 0,
      backgroundColor:"orangered",
      width: '100%',
      height:"100px",
    }}
      >
     <Typography variant="body1">
      2024 Wood - Todos los derechos reservados
     </Typography>
     </Box>
 
     </CarritoProvider>
    </>
  )
}

import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"






export const App = () => {
  
  return (
    <>
    <CarritoProvider>
    <NavBar/>
    <div style={{ height: 70 }} /> 
   
     <Outlet />
     </CarritoProvider>
    </>
  )
}

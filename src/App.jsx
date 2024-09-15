// import { EcCard } from "./components/EcCard/EcCard"
import { Outlet } from "react-router-dom"
// import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
// import { Gallery } from "./components/Gallery/Gallery"





export const App = () => {
  
  return (
    <>
    <NavBar/>
    {/* <Gallery/> */}
    <div style={{ height: 70 }} /> 
   
     <Outlet />
    
    </>
  )
}

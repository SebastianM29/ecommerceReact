import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"




export const App = () => {
  
  return (
    <>
    
    <NavBar/>
    <div style={{ height: 70 }} /> 

    <ItemListContainer greeting = "Seccion itemListContainer" />
    
    </>
  )
}

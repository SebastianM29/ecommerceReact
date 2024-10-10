import { useState } from "react"
import { Link } from "react-router-dom";
import { NavListDrawer } from "./NavListDrawer"
import { AppBar, Box, Drawer, IconButton, List, ListItem,ListItemButton,ListItemText,Toolbar } from "@mui/material"
import { CartWidget } from "../CartWidget/CartWidget"
import { Menu } from "@mui/icons-material"


const navLinks = [ 
{
  id:1,
  title : "Cnc",
  href: "madera"
},
{
  id:2,
  title: "Laser",
  href: "laser"
},
{
  id:3,
  title: "Moda & Arte Textil",
  href: "textil"
},
{ 
  id:4,
  title: "Estilo & Bienestar",
  href: "cPersonal"
}
]




export const NavBar = () => {
  const[open,setOpen] = useState(false)
  return (
    <header>
      <AppBar sx={{height:70,
        backgroundColor:"orangered",
       
        
        }}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <IconButton
          color="inherit"
          size="large"
          onClick={()=>setOpen(true)}
          sx={{display:{xs:"flex",sm:"none"}}}
          >
          <Menu/>
          </IconButton>
          <Link href="/" sx={{fontSize:"30px"}} underline="none">
          <Box
          component="img"
          src="/img/logo.gif"
          alt="Logo"
          sx={{ width: "60px", height: "60px" ,marginTop:"5px"}} 
          />
         
          </Link>
          
          <Box sx={{display:{xs:"none",sm:"flex"}}}>

          {navLinks.map((element)=>
          <Box key={element.title} sx={{  padding: 0,
            '&:hover': {
              color: 'black',
              '& .MuiListItemText-primary': {
                color: "coral",
              },
            },}}>


          <List >
           <ListItem>
            <ListItemButton component={Link} to={`/category/${element.href}`} >
              <ListItemText primary={element.title}  />
            </ListItemButton>
           </ListItem>
          </List>


          </Box>
          )}

          <CartWidget/>

          </Box>

          
        </Toolbar>

      </AppBar>

      <Drawer
      open={open}
      onClose={()=>setOpen(false)}
      anchor="left"
      sx={{display:{xs:"flex",sm:"none"}}}
      >
       <NavListDrawer navLinks = {navLinks}/>
      </Drawer>
     </header>
  )
}

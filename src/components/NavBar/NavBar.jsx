import { useState } from "react"
import { Link } from "react-router-dom";
import { NavListDrawer } from "./NavListDrawer"
import { AppBar, Box, Drawer, IconButton, List, ListItem,ListItemButton,ListItemText,Toolbar, Typography } from "@mui/material"
import { CartWidget } from "../CartWidget/CartWidget"
import { Menu } from "@mui/icons-material"


const navLinks = [ 
{
  title : "Cnc",
  href: "madera"
},
{
  title: "Laser",
  href: "laser"
},
{
  title: "Moda & Arte Textil",
  href: "textil"
},
{
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
        // position:"static",
        
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

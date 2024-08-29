import { useState } from "react"
import { NavListDrawer } from "./NavListDrawer"
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { CartWidget } from "../CartWidget/CartWidget"
import { Menu } from "@mui/icons-material"



const navLinks = [ 
{
  title : "Cnc"
},
{
  title: "Grabado Laser"
},
{
  title: "Textil"
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
        <Toolbar>
          <IconButton
          color="inherit"
          size="large"
          onClick={()=>setOpen(true)}
          sx={{display:{xs:"flex",sm:"none"}}}
          >
          <Menu/>
          </IconButton>

          <Typography sx={{flexGrow:1}}>WOOD</Typography>
          
          <Box sx={{display:{xs:"none",sm:"flex"}}}>

          {navLinks.map((element)=>
          <List key={element.title}>
           <ListItem>
            <ListItemButton sx={{padding:0}}>
              <ListItemText primary={element.title}/>
            </ListItemButton>
           </ListItem>
          </List>
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

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"


export const CustomDialog = ({open,handleCloseDialog,handleConfirmDelete,title,description}) => {
  return (
   <Dialog
   open={open}
   onClose={handleCloseDialog}
   aria-labelledby="dialog-title"
   aria-describedby="dialog-description"
   sx={{backgroundColor:"rgba(255, 69, 0, 0.2)"}}
   PaperProps={{
    sx : {
      backgroundColor:"lightsalmon",
      borderRadius:"10px",
      boxShadow: "0px 0px 8px 1px rgba(0,0,0,0.5)"

    }
   }}
   >
    <DialogTitle  id="dialog-title" >
      <Typography variant="body1" color="error" >
      {title}
      </Typography>
      
    </DialogTitle>


      <DialogContent id="dialog-description" >
        <Typography variant="body2" >
        {description}
        </Typography>
      </DialogContent>

      <DialogActions>
      <Button variant="contained"   onClick={handleCloseDialog} color="warning">
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleConfirmDelete} color="warning" autoFocus>
          Aceptar
        </Button>




      </DialogActions>
     </Dialog>
  )
}

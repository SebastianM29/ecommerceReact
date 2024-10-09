import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"


export const CustomDialog = ({open,handleCloseDialog,handleConfirmDelete,title,description}) => {
  return (
   <Dialog
   open={open}
   onClose={handleCloseDialog}
   aria-labelledby="dialog-title"
   aria-describedby="dialog-description"
   >
    <DialogTitle id="dialog-title" >{title}</DialogTitle>
      <DialogContent id="dialog-description" >
          {description}
      </DialogContent>

      <DialogActions>
      <Button variant="contained"   onClick={handleCloseDialog} color="warning">
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleConfirmDelete} color="error" autoFocus>
          Aceptar
        </Button>




      </DialogActions>
     </Dialog>
  )
}

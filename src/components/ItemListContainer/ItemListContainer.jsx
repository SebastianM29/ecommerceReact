import { Typography } from "@mui/material"
import PropTypes from "prop-types";


export const ItemListContainer = ({greeting}) => {
  return (
    <Typography >{greeting}</Typography >
  )
}

ItemListContainer.propTypes = {
    greeting : PropTypes.string.isRequired
}







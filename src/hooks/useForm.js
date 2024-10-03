import { useState } from "react"


export const useForm = (initial={}) => {
    
  const [formState,setFormState]=useState(initial)
  
 
  const onInputChange = (e) => {
   const{name,value} = e.target
 
   setFormState({
    ...formState,
    [name]:value
   })
   
  }

  const resetForm = ( ) => {
    setFormState(initial)
  }
  return {
    ...formState,
    onInputChange,
    resetForm
  }
}

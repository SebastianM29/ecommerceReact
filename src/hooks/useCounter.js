import { useState } from "react"

export const useCounter = (initialValue = 0) => {
  
  const [counter, setCounter] = useState(initialValue)
 
   
  const suma =(value = 1) => {
    setCounter(counter + value)
  }


  const rest = () => {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
   counter,
   suma,
   rest,
   reset,
  }
}

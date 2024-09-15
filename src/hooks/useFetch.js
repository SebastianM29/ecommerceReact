import { useEffect, useState } from "react"

export const useFetch = (url = "https/algo") => {

    const [prod,setProd] = useState({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
    })

    useEffect(() => {
       getProd() 
    }, [url])

    const setLoading = () => {
      setProd({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
      })
    }
    
    const getProd = async() => {
    setLoading()
    try {
        const response = await fetch(url)
        if (!response.ok) {
                setProd({
                   data:"no data",
                   isLoading:false,
                   hasError:true,
                   error: response.statusText
                 })
          return
        }
        const data = await response.json()
                 setProd({
                   data: data,
                   isLoading: false,
                   hasError:false,
                   error:null
                 })
    } catch (error) {
        console.log(error);
        
    }
    }
  
   




  return {
   data: prod.data,
   isLoading: prod.isLoading,
   hasError: prod.hasError


  }
}

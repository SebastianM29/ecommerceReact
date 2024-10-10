import { createContext, useState } from "react";



export const CarritoContext = createContext({
    carrito:[],
    total:0,
    cantidadTotal:0
})


export const CarritoProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total , setTotal] = useState(0)
    const [cantidadTotal,setCantidadTotal] = useState(0)
    
    const agregarAlCarrito = (item ,cantidad) => {
        const prodExist =  carrito.find((element) => element.item.id === item.id)

        if(!prodExist ){
            setCarrito((val) => [...val,{item,cantidad}])
            setTotal((val) => val + (item.precio*cantidad))
            setCantidadTotal((val) => val + cantidad)
            
        }else{
            
            const find = carrito.map((element)=> {
                if (element.item.id === item.id) {
                  


                   if ((cantidadTotal + cantidad) > element.item.stock) {
                return {...element, cantidad: element.item.stock}
                }


                
                return {...element, cantidad: element.cantidad +  cantidad}
            }else{
                return element
            }
           })

            setCarrito(find)
            setTotal(val => val + (item.precio * cantidad))
            setCantidadTotal(val => val + cantidad )
             
        }

    }

    const eliminarProd = (id) => {
        const deleteCart = carrito.find((element) => element.item.id === id )
        if (deleteCart) {
            const deleted = carrito.filter(element => element.item.id !== id)
            setCarrito(deleted)
            setTotal(val => val - (deleteCart.item.precio * deleteCart.cantidad))
            setCantidadTotal(cant => cant - deleteCart.cantidad)
        }
    }

    const actualizarCarrito=(item,counter) => {
        const findCart  = carrito.find((element => element.item.id === item.id))
        
        if (findCart) {
        
       
            
            const update = carrito.map(element => {
                if (element.item.id === item.id) {

                    return {...element, cantidad:counter}


                }
                  
                 return element

            })

            
        const nuevoTotal = update.reduce((acc, curr) => acc + (curr.item.precio * curr.cantidad), 0);
        const nuevaCantidadTotal = update.reduce((acc, curr) => acc + curr.cantidad, 0);
         

        setCarrito(update);
        setTotal(nuevoTotal);
        setCantidadTotal(nuevaCantidadTotal);
           
        }
        
        

    }

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

   return( 
   <CarritoContext.Provider value={{carrito,total,cantidadTotal,agregarAlCarrito,eliminarProd,vaciarCarrito,actualizarCarrito}}>
    {children}
   </CarritoContext.Provider>
)
}
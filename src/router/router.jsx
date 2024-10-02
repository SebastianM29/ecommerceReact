import { createBrowserRouter } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer.jsx";

import { ErrorPage } from "../components/ErrorPage/ErrorPage.jsx";
import { App } from "../App.jsx";
import { Cart } from "../components/cart/Cart.jsx";
import { Checkout } from "../components/Checkout/Checkout.jsx";

export const getrouter = createBrowserRouter([
   
   
            {
                path:"/",
                element:<App/>,
                errorElement: <ErrorPage/>,
                children:[
                    {
                    path:"/",
                    element:<ItemListContainer/>
                },
                {
                    path: "category/:idCat", 
                    element: <ItemListContainer/>
                },
                {
                    path: "item/:id",  
                    element: <ItemDetailContainer/>
                },
                {
                    path: "cart",  
                    element: <Cart/>
                },
                {
                    path: "checkout",  
                    element: <Checkout/>
                }



            ]

            }
           
        ]
   
) 
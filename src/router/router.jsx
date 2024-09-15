import { createBrowserRouter } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer.jsx";

import { ErrorPage } from "../components/ErrorPage/ErrorPage.jsx";
import { App } from "../App.jsx";

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
                }

            ]

            }
           
        ]
   
) 
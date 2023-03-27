import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, CreateRecipe, SaveRecipe, Auth} from "./Pages"
import { Layout} from './Components';
import {loader as homePageLoader} from "./Pages/Home";
import {loader as savedRecipeLoader} from "./Pages/SaveRecipe";
import Error from './Components/Error';
import ProtectedRoute from './Components/ProtectedRoute';


const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
     
        
        
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:homePageLoader,
                errorElement:<Error/>,
               
            },
            {
                path:'createRecipe',
                element:<ProtectedRoute><CreateRecipe/></ProtectedRoute>
            },
            {
                path:'savedRecipe',
                element:<ProtectedRoute><SaveRecipe/></ProtectedRoute>,
                loader:savedRecipeLoader

            },
            {
                path:'auth',
                element:<Auth/>
            },
           
        ],
        
    },{
        path:'*',
        element:<h1>404 Not found</h1>
    }
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
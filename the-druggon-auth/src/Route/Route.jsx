import {
    createBrowserRouter
   
  } from "react-router-dom";
import App from "../App";
import About from "../Component/About/About";
import Career from "../Component/Career/Career";
import Home from "../Component/Home/Home";
import Left_side from "../Component/Left_side/Left_side";
import Login from "../Component/Login/Login";
import Resister from "../Component/Resister/Resister";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },{
            path:"/Resister",
            element:<Resister></Resister>,
        },{
            path:"/Login",
            element:<Login></Login>,
        },{
            path:"/About",
            element:<About></About>,
          
        },{
          path:"/Career",
          element:<Career></Career>,
        },{
          path:"/Left_side",
          element:<Left_side></Left_side>,
        }
      ]
    },
  ]);
  
  export default router;
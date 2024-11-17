import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/products',
                element: <Products/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
        ]
    }
])
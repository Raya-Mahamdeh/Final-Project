import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import About from  './pages/About/components/About.jsx';
import Home from './pages/Home/components/Home.jsx';
import Profile from './pages/Profile/components/Profile.jsx';
import Login from './pages/Login/components/Login.jsx';
import Signup from './pages/Signup/components/Signup.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Root from './routes/Roots.jsx';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/signup',
        element: <Signup/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'*',
        element: <NotFound/>
      }
    ]
  }
]);


export default function App() {
   
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}



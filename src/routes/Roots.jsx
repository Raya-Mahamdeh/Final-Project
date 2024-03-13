import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Roots() {
  return (
    <>
    <Navbar/>
    
    <Outlet/>

    <Footer/>
    </>
  )
}

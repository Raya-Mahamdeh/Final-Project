import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Catagories from '../components/Catagories.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Roots() {
  return (
    <>
    <Navbar/>
    <Catagories/>
    <Outlet/>
    </>
  )
}

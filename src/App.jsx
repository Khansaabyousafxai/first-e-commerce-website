import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Page404 from './pages/Page404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

export default function App() {
  const [user,setUser]= useState(true)

  return (

    <>
    <NavigationBar/>

    {
      user 
      ? 
      (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:productID" element={<ProductPage />} />
        <Route path="/products/category/:ProductName" element={<CategoryPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      ) 
      : 
      (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup*" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      )


    }

    <FooterSection/>
  
    </>
  )
}

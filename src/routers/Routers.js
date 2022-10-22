import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// My pages' import
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
    return (
        <Routes>
            {/* Redirect to the home page */}
            <Route path='/' element={<Navigate to='home' />} />
            {/* Home */}
            <Route path='home' element={<Home />} />
            {/* Shop */}
            <Route path='shop' element={<Shop />} />
            {/* Shop con ID singolo */}
            <Route path='shop/:id' element={<ProductDetail />} />
            {/* Cart */}
            <Route path='cart' element={<Cart />} />
            {/* Checkout */}
            <Route path='checkout' element={<Checkout />} />
            {/* Login */}
            <Route path='login' element={<Login />} />
            {/* Signup */}
            <Route path='signup' element={<Signup />} />
        </Routes>
    )
}

export default Routers
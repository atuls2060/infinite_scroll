import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/Login'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
    </Routes>
  )
}

export default AllRoutes
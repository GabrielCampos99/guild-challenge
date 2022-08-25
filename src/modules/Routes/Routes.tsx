import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/views/Home'

type TRoutes = {}

const RoutesApp: React.FC<TRoutes> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default RoutesApp

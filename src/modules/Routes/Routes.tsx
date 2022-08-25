import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/views/Home'
import Quizz from '../Quizz/views/Quizz'

type TRoutes = {}

const RoutesApp: React.FC<TRoutes> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quizz" element={<Quizz />}></Route>
      </Routes>
    </div>
  )
}

export default RoutesApp

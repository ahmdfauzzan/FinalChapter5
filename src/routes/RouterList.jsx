import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
// import { Carasuel2 } from '../assets/components/Carasuel2'

export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

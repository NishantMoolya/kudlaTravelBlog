import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './BlogPage'
import PlacesPage from './PlacesPage'
import HomePage from './HomePage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/places' element={<PlacesPage />} />
      </Routes>
    </div>
  )
}

export default App
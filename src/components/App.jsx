import React, { Suspense, lazy, useEffect } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
//import BlogPage from './BlogPage'
//import PlacesPage from './PlacesPage'
import HomePage from './HomePage'
import Spinner from './Spinner'
import CreateBlog from './CreateBlog'
import ErrorPage from './ErrorPage'
const PlacesPage = lazy(() => import('./PlacesPage'));
const BlogPage = lazy(() => import('./BlogPage'));

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='blogs' element={<Suspense fallback={<Spinner />}><BlogPage /></Suspense>} />
          <Route path='places' element={<Suspense fallback={<Spinner />}><PlacesPage /></Suspense>} />
          <Route path='about' element={<CreateBlog />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
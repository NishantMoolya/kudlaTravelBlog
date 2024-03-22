import React, { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import Spinner from './Spinner'
import PrivateRoute from './PrivateRoute'
import Layout from './Layout'
import { AnimatePresence } from 'framer-motion'
const ErrorPage = lazy(() => import('./ErrorPage'));
const Profile = lazy(() => import('./Profile'));
const CreateBlog = lazy(() => import('./CreateBlog'));
const PlacesPage = lazy(() => import('./PlacesPage'));
const BlogPage = lazy(() => import('./BlogPage'));
const Signup = lazy(() => import('./Signup'));
const Login = lazy(() => import('./Login'));

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='blogs' element={<Suspense fallback={<Spinner />}><BlogPage /></Suspense>} />
          <Route path='places' element={<Suspense fallback={<Spinner />}><PlacesPage /></Suspense>} />
          <Route path='signup' element={<Suspense fallback={<Spinner />}><Signup /></Suspense>} />
          <Route path='login' element={<Suspense fallback={<Spinner />}><Login /></Suspense>} />
          <Route path='user' element={<PrivateRoute />}>
            <Route path='profile' element={<Suspense fallback={<Spinner />}><Profile /></Suspense>} />
            <Route path='create' element={<Suspense fallback={<Spinner />}><CreateBlog /></Suspense>} />
          </Route>
        </Route>
        <Route path='*' element={<Suspense fallback={<Spinner />}><ErrorPage /></Suspense>} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
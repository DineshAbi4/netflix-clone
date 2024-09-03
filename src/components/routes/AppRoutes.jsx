import React from 'react'
import {
  ProtectedRoute,
  ProtectedRouteForUnAuthorizedPage,
} from "../routes/ProtectedRoute";

import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import LandingPage from '../../pages/public/landing-page/LandingPage'
import SignIn from '../../pages/auth/SignIn'
import HomePage from '../../pages/portal/home/HomePage'
import SignUp from '../../pages/auth/signup/SignUp'
import MyList from '../../pages/portal/mylist/MyList'
import Search from '../../pages/portal/search/Search'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
           <ProtectedRouteForUnAuthorizedPage>
          <LandingPage/>
         </ProtectedRouteForUnAuthorizedPage>}/>
        
        <Route path='/SignIn' element={
          <ProtectedRouteForUnAuthorizedPage>
          <SignIn/>
          </ProtectedRouteForUnAuthorizedPage>
        }/>
        <Route path='/SignUp' element={
        <ProtectedRouteForUnAuthorizedPage>
        <SignUp/>
        </ProtectedRouteForUnAuthorizedPage>
      }/>
        <Route path='/home' element={
             <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>
        }/>
        <Route path='/mylist' element={
         <ProtectedRoute>
        <MyList/>
        </ProtectedRoute>
        }/>
        <Route path='/serch' element={
         <ProtectedRoute>
        <Search/>
        </ProtectedRoute>
        }/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

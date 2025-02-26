import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

function AuthLayout() {
  return (
    <>
    <Header/>
    
    <div id='AuthDetail'>
        <Outlet/>
      
    </div>
    </>
  )
}

export default AuthLayout

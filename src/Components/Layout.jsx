import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <main className='container'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
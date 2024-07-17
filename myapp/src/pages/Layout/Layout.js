import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import "./Layout.css"
const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='layoutpage'>
                <Outlet />
            </div>
            <footer className='footer'>
                <p>
                    this is footer
                </p>
            </footer>
        </>
    )
}
export default Layout;
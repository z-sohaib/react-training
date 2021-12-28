import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center mt-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

export default Layout

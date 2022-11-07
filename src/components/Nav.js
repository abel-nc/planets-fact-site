import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../data.json'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = (props) => {

    const { isSidebarOpen, toggleSidebar } = props

    return (
        <nav className='navbar'>
            <div>
                <h1>THE PLANETS</h1>
                <div className={ isSidebarOpen ? 'sidebar' : 'hide-sidebar sidebar' }>
                    {
                        data.map((planet, index) => <NavLink to={`/${planet.name.toLowerCase()}`} className={ isSidebarOpen ? `${planet.name.toLowerCase()} nav-item` : 'hide-item nav-item' } key={index}>{planet.name}</NavLink> )
                    }
                </div>
            </div>
            <div className='nav-items'>
                {
                    data.map((planet, index) => <NavLink to={`/${planet.name.toLowerCase()}`} className={`${planet.name.toLowerCase()} nav-item`} key={index}>{planet.name}</NavLink> )
                }
            </div>
            { isSidebarOpen
                ? <FaTimes onClick={toggleSidebar} className='menu-icon' />
                : <FaBars onClick={toggleSidebar} className='menu-icon' /> 
            }
        </nav>
    )
}

export default Nav
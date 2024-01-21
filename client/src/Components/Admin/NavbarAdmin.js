import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './Sidebardata'
import './navbar.css'
import Products from './Products'

function NavbarAdmin() {
  return (
    <div className='sidebar'>
        <ul className='sidebarlist'>
            {SidebarData.map((data, index) => (
                <li 
                    key={index}
                    className='row'
                    id={window.location.pathname == data.path ? "active" : ""}
                    onClick={() => {window.location.pathname = data.path}}
                >
                    <div id='icon'>{data.icon}</div>
                    <div id='title'>{data.title}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavbarAdmin
import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './Sidebardata'
import './Admin_navbar.css'


function NavbarAdmin() {
  return (
    <div className='admin_sidebar'>
        <ul className='admin_sidebarlist'>
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
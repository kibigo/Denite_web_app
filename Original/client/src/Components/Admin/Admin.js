import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import './Admin.css'
import Users from './Users'
import ContentHeader from './ContentHeader'
import Card from './Card'

function Admin() {

  return (
    <div className='admin'>
      <NavbarAdmin />

      <div className='admin-header'>
        <ContentHeader/>

        <div className='admin-content'>
          <Card />
          <Users />
        </div>
      </div>

 
     
      
    </div>
  )
}

export default Admin
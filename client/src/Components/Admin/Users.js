import React from 'react'
import './User.css'
import { useState, useEffect } from 'react'

function Users() {
    const [user, setUser] = useState([])


    useEffect(() => {
      fetch('/user')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.log('This is the error: ', error)
      })
      
    }, [])
    
  
  return (
    <div className='users_table'>
        <h3>Registered Customers</h3>

        <table className='users_list'>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.filter((person) => !person.is_admin).map((normal_user) => (
            <tr key={normal_user.id}>
                <td>{normal_user.firstname}</td>
                <td>{normal_user.lastname}</td>
                <td>{normal_user.phone}</td>
                <td>{normal_user.email}</td>
            </tr>
            ))}
          </tbody>
        </table>

    </div>
  )
}

export default Users
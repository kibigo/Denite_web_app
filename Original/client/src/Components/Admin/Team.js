import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

function Team() {
    const members =[
        {
            image:<FontAwesomeIcon icon={faUser}/>,
            name: 'Levy Omoto',
            role:'Frontend Developer',
            salary:'USD 2,000',
            location:'Kenya'
        }
    ]
  return (
    <div className='team-list'>
        <div className='team-content'>
            <h1>Team</h1>

            <div className='team-table'>
                <table>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Salary</th>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index}>
                                <td>{member.image}</td>
                                <td>{member.name}</td>
                                <td>{member.role}</td>
                                <td>{member.location}</td>
                                <td>{member.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Team
import React from 'react'
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faBarsProgress, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

function Card() {
    const pages = [
        {
            title:'Projects',
            number:1,
            icon: <FontAwesomeIcon icon={faDiagramProject}/>
        },
        {
            title:'Ongoing Projects',
            duration:'2 weeks',
            icon:<FontAwesomeIcon icon={faBarsProgress}/>
        },
        {
            title:'Team',
            number:'5 members',
            icon:<FontAwesomeIcon icon={faPeopleGroup}/>
        }
    ]
  return (
    <div className='card-container'>
        {pages.map((page, index) => (
            <div className='card' key={index}>
                <div className='card-cover'>{page.icon}</div>
                <div className='card-title'>
                    <h2>{page.title}</h2>
                </div>
                <div>
                    {page.duration ? (
                        <h3> Duration: {page.duration}</h3>
                    ) : ""}

                    {page.number ? (
                        <h3>{page.number}</h3>
                    ): ""}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card
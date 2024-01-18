import React from 'react'

export default function Product (props) {
  return (
    <div>
        
        <div className= "card">
            <img className="product--image"
            src={props.url} alt=""/>
            <h3>{props.name}</h3>
            <p className= "price">{props.price}</p>
            <p>{props.description}</p>
            
            </div>

        </div>
  )
}
export { Product };
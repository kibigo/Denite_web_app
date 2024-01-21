import React, { useEffect, useState } from 'react'
import './Products.css'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => {
            console.log('This error occured: ', error)
        })
    }, [])

  return (
    <div className='admin_products'>
        <h1>Products</h1>
        <table className='products_table'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.weight}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td> <img src={product.imageurl}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Products
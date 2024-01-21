import React, { useEffect, useState } from 'react'

function Report() {
    const [pays, setPays] = useState([])

    useEffect(() => {
        fetch('/payment')
        .then((response) => response.json())
        .then((data) => setPays(data))
        .catch((error) => {
            console.log('This is the error: ', error)
        })
    }, [])
  return (
    <div>
        <h1>Payments</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {pays.map((pay) => (
                    <tr key={pay.id}>
                        <td>{pay.id}</td>
                        <td>{pay.payment_date}</td>
                        <td>{pay.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Report
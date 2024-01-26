import React, { useState } from 'react'
import './Mpesa.css'

function Mpesa({totalAmount}) {
    const [phone, setPhone] = useState("")
    const [amount, setAmount] = useState(totalAmount)


    const [loading, setLoading] = useState(false)

    const handleNumber = (event) => {
        setPhone(event.target.value)
    }

    const handleAmount = (event) => {
        setAmount(event.target.value)
    }

    const submiForm = (event) => {
        event.preventDefault()
        setLoading(true)

        fetch('/make_payment', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({phone, amount})
        })
        .then((response) => {
            setLoading(false)

            if (response.ok){
                window.alert('Payment made')
            } else{
                window.alert('Payment failed')
            }
        })
        .catch((error) => {

            setLoading(false)

            console.log('This is the error: ', error)
        })
    }
  return (
    <div className='mpesaPage'>
        <h1>Mpesa Payment</h1>
        <form className='mpesaForm' onSubmit={submiForm}>
            <input 
                type='number'
                placeholder='Enter number'
                name='phone'
                value={phone}
                onChange={handleNumber}
            />

            <input 
                type='number'
                placeholder='Enter amount'
                name='amount'
                value={amount}
                onChange={handleAmount}
                
            />

            <button type='submit'>
                {loading ? 'Processing...' : 'Submit'}
            </button>
        </form>
    </div>
  )
}

export default Mpesa
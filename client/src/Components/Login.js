import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>Welcome Back !</h1>
            <form className='login-form'>
                <h2>Login</h2>
                <input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className='forgot'>
                    <a href='/forgotpassword' >Forgot password ?</a>
                </div>
            
                <button className='button'>
                    Sign in
                </button>

                
            </form>
            <div className='image'>
                <img src='https://img.freepik.com/free-vector/people-shopping-with-bags_24908-56764.jpg?size=626&ext=jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Login
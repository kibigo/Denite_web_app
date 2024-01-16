import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        fetch('/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((response) => {
            if (response.ok){
                return response.json()
            }else{
                window.alert('Response Error')
            }
        })
        .then((data) => {
            if (data.is_admin){
                navigate('/admin')
            }else{
                navigate('/home')
            }
        })
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>Welcome Back !</h1>
            <form className='login-form' onSubmit={handleLogin}>
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
            
                <button className='button' type='submit'>
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
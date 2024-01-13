import React, { useState } from 'react'
import './Register.css'

function Register() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [key]: value })
    }
    return (
        <div className='register'>
            <div className='form-container'>
                <h1 className='heading'>Denite Online Store</h1>
                <form className='form'>
                    <h2>Create an account</h2>
                    <input
                        name='firstname'
                        type='text'
                        placeholder='First Name'
                        value={formData.firstname}
                        onChange={handleChange}
                    />

                    <input
                        name='lastname'
                        type='text'
                        placeholder='Last Name'
                        value={formData.lastname}
                        onChange={handleChange}
                    />

                    <input
                        name='phone'
                        type='text'
                        placeholder='Phone number'
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <input
                        name='email'
                        type='email'
                        placeholder='Email Address'
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

                    <input
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button type='submit' className='button'>
                        Register
                    </button>
                    <p>Already have an account ?<a href='/login'>Login</a> </p>
                </form>
                <div className='image'>
                    <img src='https://img.freepik.com/free-photo/glad-positive-afro-american-lady-chooses-outft-date-holds-high-heeled-blue-shoes-rosy-dress-hangers-prepares-party-celebration-poses-blue-wall-with-inflated-balloons_273609-39701.jpg?size=626&ext=jpg' />
                </div>
            </div>

        </div>
    )
}

export default Register
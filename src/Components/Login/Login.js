import React,{useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {loginValidation} from "../util.js" // [1
export default function Login() {
  const [values, setValues] = useState({
    email:'', 
    password:''
  })
  const [errors,setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(loginValidation(values))
  }

  const handleInput = (e) => {
   setValues({...values, [e.target.name]:e.target.value});
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-23'>
      <h2 className='text-center'>Sign-In</h2>
        <form action='' style={{margin:"1rem "}} onSubmit={handleSubmit} >
          <div className='' style={{margin:"0 0 1rem 0"}} >
            <label htmlFor='email'><strong>Email</strong></label>
            <input onChange={handleInput} type="email" name='email' placeholder='Enter Email' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
            {errors.email && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.email}</span>}
          </div>
          <div className='' style={{margin:"0 0 1rem 0"}} >
            <label htmlFor='Password'><strong>Password</strong></label>
            <input  onChange={handleInput} type="Password" name='password' placeholder='Enter Password' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
          {errors.password && <span className="text-danger" style={{fontSize:"9px"}}>{errors.password}</span>}

          </div>
          <button type='submit' className='btn btn-success w-100 '><strong>Log in</strong></button>
          <p className='' style={{fontSize:'12px', margin:"8px 0 16px 0"}}>
          <Link  to='/forgot'>I forgot my password</Link>
          </p>
          <hr/>
          <p className='' style={{fontSize:'12px', margin:"8px 0 16px 0",textAlign:'center'}}>
          I do not have an account
          
          </p>
          <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none '>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

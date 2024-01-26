import React,{useState} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import { signupValidation } from '../util'

export default function SignUp() {
  const [values, setValues] = useState({
    name:'',
    email:'', 
    password:'',
    terms:'',
    confirmPassword:''
  })
  const [errors,setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(signupValidation(values))
  }

  const handleInput = (e) => {
   setValues({...values, [e.target.name]:e.target.value});
  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-23'>
    <h2 className='text-center'>Sign-Up</h2>
      <form action='' style={{margin:"1rem "}} onSubmit={handleSubmit} >
      <div className='' style={{margin:"0 0 1rem 0"}} >
          <label htmlFor='name'><strong>Name</strong></label>
          <input onChange={handleInput} type="name" name='name' placeholder='Enter FullName' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
          {errors.name && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.name}</span>}
        </div>
        <div className='' style={{margin:"0 0 1rem 0"}} >
          <label htmlFor='email'><strong>Email</strong></label>
          <input onChange={handleInput} name="email"  placeholder='Enter Email' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
          {errors.email && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.email}</span>}
        </div>
        <div className='' style={{margin:"0 0 1rem 0"}} >
          <label htmlFor='Password'><strong>Password</strong></label>
          <input type="Password" onChange={handleInput} placeholder='Enter Password' name='password' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
          {errors.password && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.password}</span>}
        </div>
        <div className='' style={{margin:"0 0 1rem 0"}} >
          <label htmlFor='Password'><strong>Confirm Password</strong></label>
          <input type="Password" onChange={handleInput} placeholder='Enter Confirm Password' name='confirmPassword' className='form-control rounded-2' style={{fontSize:"12px",minWidth:"300px",minHeight:"50px"}}/>
          {errors.confirmPassword && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.confirmPassword}</span>}
        </div>
        <p className='sign-up-info' style={{fontSize:'12px', margin:"8px 0 16px 0",textAlign:'center'}}>
        Do you agrer to the terms and conditions? <input onChange={handleInput} type="checkbox" name="terms" id="terms" />
        <br/>
        {errors.terms && <span className="text-danger" style={{fontSize:"9px", maxWidth:"300px"}}>{errors.terms}</span>}        </p>

        <button className='btn btn-success w-100 '><strong>Sign up</strong></button>
        <p className='' style={{fontSize:'12px', margin:"8px 0 16px 0",display:"flex",justifyContents:"center"}}>
        </p>
        <hr/>
        
        <Link to='/login' className='btn btn-default border w-100 bg-light text-decoration-none '>I have an Account</Link>
      </form>
    </div>
  </div>
  )
}

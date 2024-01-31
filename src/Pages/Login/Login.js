import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { loginValidation } from '../../util.js';

export default function Login({ onLogin,title }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidation(values));

        setErrors(loginValidation(values))

    // Simulating a successful login for testing purposes
    if (Object.values(errors).every((error) => error === '')) {
      setIsLoggedIn(true);
      onLogin(); // Notify the parent component about the login
      console.log("Check ,e out")
    }
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='d-flex justify-content-center align-items-center ' style={{ backgroundColor: '#f9fafe', overflow: 'hidden', height: title === "Admin Sign" ? '100vh' : '85vh' }}>
      <div className='bg-white p-3 rounded w-23'>
        <h2 className='text-center'>{title}</h2>
        <form action='' style={{ margin: '1rem ' }} onSubmit={handleSubmit}>
          <div className='' style={{ margin: '0 0 1rem 0' }}>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              onChange={handleInput}
              name='email'
              placeholder='Enter Email'
              className='form-control rounded-2'
              style={{ fontSize: '12px', minWidth: '300px', minHeight: '50px' }}
            />
            {errors.email && (
              <span className='text-danger' style={{ fontSize: '9px', maxWidth: '300px' }}>
                {errors.email}
              </span>
            )}
          </div>
          <div className='' style={{ margin: '0 0 1rem 0' }}>
            <label htmlFor='Password'>
              <strong>Password</strong>
            </label>
            <div className='input-group'>
                        <input
              type={showPassword?'text':'password'}
              onChange={handleInput}
              name='password'
              placeholder='Enter Password'
              className='form-control rounded-2'
              style={{ fontSize: '12px', minWidth: '300px', minHeight: '50px' }}
            />
              <button
                type='button'
                className='btn btn-outline-secondary'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <span className='text-danger' style={{ fontSize: '9px' }}>
                {errors.password}
              </span>
            )}
          </div>
          <button type='submit' className='btn btn-success w-100 '>
            <strong>Log in</strong>
          </button>
          <p className='' style={{ fontSize: '12px', margin: '8px 0 16px 0' }}>
            <Link to='/forgot'>I forgot my password</Link>
          </p>
          <hr />
          <p className='' style={{ fontSize: '12px', margin: '8px 0 16px 0', textAlign: 'center' }}>
            I do not have an account
          </p>
          <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none '>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

// import React,{useState} from 'react'
// import './login.css'
// import {Link} from 'react-router-dom'
// import {loginValidation} from "../../util.js" // [1
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// export default function Login({ onLogin,title }) {
//   const [values, setValues] = useState({
//     email:'', 
//     password:''
//   })
//   const [errors,setErrors] = useState({})
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setErrors(loginValidation(values))

//     // Simulating a successful login for testing purposes
//     if (Object.values(errors).every((error) => error === '')) {
//       setIsLoggedIn(true);
//       onLogin(); // Notify the parent component about the login
//       navigate('/home')
//     }
    
//   }

//   const handleInput = (e) => {
//    setValues({...values, [e.target.name]:e.target.value});
//   }

//   return (
//     <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#f9fafe', overflow: 'hidden', height: title === "Admin Sign" ? '100vh' : '85vh' }}>
//     <div className='bg-white p-3 rounded w-23'>
//       <h2 className='text-center'>{title}</h2>
//       {isLoggedIn ? (
//         <div className='text-success text-center mb-3'>
//           <FontAwesomeIcon icon={faCheckCircle} size='2x' />
//           <p>Login Successful!</p>

//         </div>
//       ) : (
//         <form action='' style={{ margin: '1rem ' }} onSubmit={handleSubmit}>
//           <div className='' style={{ margin: '0 0 1rem 0' }}>
//             <label htmlFor='email'>
//               <strong>Email</strong>
//             </label>
//             <input
//               onChange={handleInput}
//               name='email'
//               placeholder='Enter Email'
//               className='form-control rounded-2'
//               style={{ fontSize: '12px', minWidth: '300px', minHeight: '50px' }}
//             />
//             {errors.email && (
//               <span className='text-danger' style={{ fontSize: '9px', maxWidth: '300px' }}>
//                 {errors.email}
//               </span>
//             )}
//           </div>
//           <div className='' style={{ margin: '0 0 1rem 0' }}>
//             <label htmlFor='Password'>
//               <strong>Password</strong>
//             </label>
//             <input
//               onChange={handleInput}
//               type='password'
//               name='password'
//               placeholder='Enter Password'
//               className='form-control rounded-2'
//               style={{ fontSize: '12px', minWidth: '300px', minHeight: '50px' }}
//             />
//             {errors.password && (
//               <span className='text-danger' style={{ fontSize: '9px' }}>
//                 {errors.password}
//               </span>
//             )}
//           </div>
//           <button type='submit' className='btn  w-100' style={{backgroundColor:"#5c48ee", color:'white'}}>
//             <strong>Log in</strong>
//           </button>
//           <p className='' style={{ fontSize: '12px', margin: '8px 0 16px 0' }}>
//             <Link to='/forgot'>I forgot my password</Link>
//           </p>
//           <hr />
//           <p className='' style={{ fontSize: '12px', margin: '8px 0 16px 0', textAlign: 'center' }}>
//             I do not have an account
//           </p>
//           <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>
//             Create Account
//           </Link>
//         </form>
//       )}
//     </div>
//   </div>
// )
// }

export function loginValidation(values){
    // alert('Hello')
    let error={}
    const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if(values.email===''){
        error.email="Email should not be empty"
    } else if(!email_pattern.test(values.email)){
        error.email="Invalid email format"
    }else{
        error.email=""
    }

    if(values.password===''){
        error.password="Password should not be empty"
    } else if(!password_pattern.test(values.password)){
        error.password="Password should contain atleast 8 characters, 1 uppercase, 1 lowercase and 1 number"
    }else{
        error.password=""
    } return error;
}

export function signupValidation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (values.name === '') {
      error.name = 'Name should not be empty';
    } else {
      error.name = '';
    }
  
    if (values.email === '') {
      error.email = 'Email should not be empty';
    } else if (!email_pattern.test(values.email)) {
      error.email = 'Invalid email format';
    } else {
      error.email = '';
    }
  
    if (values.password === '') {
      error.password = 'Password should not be empty';
    } else if (!password_pattern.test(values.password)) {
      error.password =
        'Password should contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 number';
    } else {
      error.password = '';
    }
  
    if (!values.terms) {
      error.terms = 'Please accept the terms and conditions';
    } else {
      error.terms = '';
    }
  
    return error;
  }
  
import React, { useState } from 'react'
import { Form,Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { loginEmailAsyc, loginGoogleAsync, loginWithFacebook } from '../redux/actions/actionLogin'

const Login=()=> {
  const dispatch  = useDispatch()
  const [register,setRegister]= useState({
    email:"",
    pass:""
  });
  const {email, pass}=register;

  const handleInputChange=({target})=>{
    setRegister({
      ...register,
      [target.name]:target.value
    })
  }

  const handleGoogle=()=>{
      dispatch(loginGoogleAsync())
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginEmailAsyc(email,pass))
  }
  const handleFacebook=()=>{
    dispatch(loginWithFacebook())
  }
  return (
 <div className='container d-flex justify-content-center align-content-center pt-5 '>Login
   <Form className='w-100 mt-5' onSubmit={handleSubmit} >

   <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="email" 
       placeholder="Enter email"
       name='email'
       onChange={handleInputChange}
        />
   </Form.Group>   

   <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="password" 
       placeholder="Password" 
       name='pass'
       onChange={handleInputChange}
       />
   </Form.Group>
    <Container className='d-flex'>
      <Container className="google-btn"
      onClick={()=>handleGoogle()}>
        <Container className="google-icon-wrapper"  >
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </Container>
      </Container>
      <Container className="google-btn"
      onClick={()=>handleFacebook()}>
        <Container className="google-icon-wrapper"  >
          <img className="google-icon" width={"30em"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="facebook button" />
        </Container>
      </Container>
   <Button variant="primary" type="submit">
       Submit
   </Button>
   </Container>
   </Form>
 </div>
  )
}

export default Login
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { registroAsync } from '../redux/actions/actionRegister';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';

function Register() {
    const dispatch = useDispatch()
    const swal = require('sweetalert2')
    const [register, setRegister] = useState({
        email:"",
        pass2:"",
        name:"",
        pass1:""
    })
    const {email,pass2, pass1, name}= register;
    const handleInputChange = ({target}) =>{
        setRegister({
            ...register,
            [target.name]:target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(pass1===pass2 && pass1.length >6){
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
            })
            dispatch(registroAsync(email,pass1,name))
        }else{
            swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Make sure passwords match and contain more than 6 characters'
            })
        }
        
    }
  return (
    <div className='container d-flex justify-content-center align-content-center pt-5 '>
        Register
        <Form className='w-100 mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" 
                placeholder="Enter name"
                onChange={handleInputChange}
                required
                name='name'
                 />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email"
                 placeholder="Enter email"
                 onChange={handleInputChange}
                 required
                 name="email"
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password"
                 placeholder="Password" 
                 name="pass1" 
                 onChange={handleInputChange}
                 min="6"
                 required
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password"
                 placeholder="Password" 
                 name="pass2"
                 onChange={handleInputChange}
                 min="6"
                 required
                 />
            </Form.Group>
            <Button variant="primary"
             type="submit"
             onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default Register
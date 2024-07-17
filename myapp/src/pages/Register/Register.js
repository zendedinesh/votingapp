import React, { useState } from 'react';
import axios from 'axios';
import '../Register/Register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const navigatetoregister = () => {
        navigate('/login')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userName: userName,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };

        if (!userName) {
            setError('userName is required')
            if (!email) {
                setError('email is required')
            }
            if (!password) {
                setError('password is required')
            }
            if (!phoneNumber) {
                setError('phonenumber  is required')
            }
              
            try {
                const response = await axios.post('http://localhost:8050/register', payload);
                console.log("Successful", response.data);
                alert("Registered Successfully");

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className='container'>
            <div className='name'>
                <h1 className='form-title'>REGISTRATION FORM</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='main-user'>

                    <input
                        type='text'
                        name='UserName'
                        placeholder='Enter User Name'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        autoComplete='off'
                        error={error}
                    />



                    <input
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='off'
                        error={error}
                    />


                    <input
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='off'
                        error={error}
                    />




                    <input
                        type='number'
                        name='phonenumber'
                        placeholder='Enter phonenumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        autoComplete='off'
                        error={error}
                    />


                </div>
                <div className='submit-btn'>
                    <input type="submit" value="Register" />
                    <input type="submit" value="Login" onClick={navigatetoregister} />

                </div>
            </form>
        </div>
    );
};

export default Register;

import React, { useState } from 'react'
import '../login/Login.css'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const submitlogin = async (e) => {

        e.preventDefault();
        const payload = ({ email: email, password: password })
        try {
            const response = await axios.post('http://localhost:8050/login', payload)
            // console.log('successfully loged in ', response.data)
            // alert('login successfully')
            if (response.status === 200) {
                login(response.data.data)
                if(response.data.data.ROLE==="ADMIN")
                {
                    navigate("/admin")
                }
                else
                {

                    navigate("/vote")
                }
            }

        } catch (error) {
            console.error('register here ')
        }
    }
    return (
        <div className='container'>

        <div className='formContainer'>

            <div className='loginname'>
                <h1 className='login'>Login Form</h1>
            </div>
            <form onSubmit={submitlogin} >
                <div className='main-usertwo'>
                    <input type="text"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <input type="text"
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='submit-btntwo'>
                    <button type='submit'>Login</button>
                    <Link to={"/register"}>
                        Register
                    </Link>

                </div>
            </form>

        </div>
        </div>
    )
}
export default Login;
import { useState } from 'react'
import './Login.scss'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = ()=>{
        alert('me')
    }

    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet?

            </div>
            <div className='title col-4 mx-auto' >
                Quiz
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who’s this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input 
                    type='email' 
                    className='form-control'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                    type='password' 
                    className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <span className='fotgot-password'>Forgot password ?</span>
                <div>
                    <button className='btn-login' onClick={()=>handleLogin()}>Login to Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Login
import React, { useState, useEffect, useRef } from 'react';
import './loginStyle.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
        // Load password from local storage if "Remember Me" is checked
        const savedPassword = localStorage.getItem('rememberedPassword');
        if (savedPassword && rememberPassword) {
            setPassword(savedPassword);
        }
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberPasswordChange = (event) => {
        setRememberPassword(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Save password to local storage if "Remember Me" is checked
        if (rememberPassword) {
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedPassword');
        }
        console.log('Submitted:', email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className='main-container'>
            <div className="centered">
                <div className="welcome">
                    <h1>Welcome!</h1>
                    <p>Log in your account </p>
                </div>
               

                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="form-group">

                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                ref={emailRef} className="field"
                            />
                        </div>

                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange} className="field"
                            />
                        </div>

                        <div className='box'>
                            <input
                                type="checkbox"
                                id="rememberPassword"
                                checked={rememberPassword}
                                onChange={handleRememberPasswordChange}
                            />
                            <label htmlFor="rememberPassword">Remember Me</label>
                        </div>
                        <div className='login-button'>
                            <button type="submit" class="btn">Log In</button>
                        </div>


                        <div className='outer-button'>
                            <button className='google'>Continue with Google</button>
                            <button className='facebook'>Continue with facebook</button>
                        </div>

                        <div className='account'>
                            <p>Don't have any account?</p>
                            <p className='signup'><a href='Register.js'>Signup</a></p>
                        </div>
                    </form>
                
            </div>
        </div>
    );
}

export default Login;

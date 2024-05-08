import React, { useState } from 'react';
import './style.css';
import { Lock, Mail } from 'lucide-react';
import { app } from '../../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='login-main'>
      <div className='login-container'>
        <div className="login-content">
          <div className="login-side-text">
            <span>Welcome to</span>
            <h1>Zeppler Online Dating for Singles</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className='login-container-form'>
            <div className="login-box">
              <div className="login-heading">
                <span>Zeppler</span>
              </div>
              <div className="login-inputs">
                <div className="input-box">
                  <Mail />
                  <input type="text" placeholder='Email'
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <Lock />
                  <input type="password" placeholder='Password'
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={login}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

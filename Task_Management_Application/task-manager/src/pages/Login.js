import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAuth} from '../redux/actions';

const Login = () => {
    const[email, setEmail] = useState ('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate =  useNavigate();


    const handleSubmit =() => {
        if (email && password) {
            const authToken ='sampleAuthToken';
            localStorage.setItem('authToken',authToken);
            dispatch(setAuth(authToken));
            navigate('./dashboard');

            
        }
    };

    return (
      <div>
        <input type ="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Login</button>
        
      </div>
    );

    
};

export default Login;

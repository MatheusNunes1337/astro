import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api'

import '../assets/css/global.css'
import '../assets/css/dashboard.css'

export default function Login() {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [buttonStatus, setbuttonStatus] = useState('Login')

  const history = useHistory()

  async function handleLogin(e) {
  	e.preventDefault()

  	const data = {
  		username,
  		password
  	}
 
  	try {
      setbuttonStatus('Entrando...')
  		const response = await api.post('auth/login', data)
      localStorage.setItem('aToken', response.data)
  		history.push('/dashboard')
  	} catch(err) {
      setbuttonStatus('Login')
      if (err.response && err.response.data) {
        alert(err.response.data.message)
      }
  	}
  }

  return (
  	<React.Fragment>
	    <div className="login-bg">
	    	<form id="adm_form" onSubmit={handleLogin}>
		        <p>Login</p>
		        <input type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="username"/>
		        <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="password"/>
		        <button type="submit">{buttonStatus}</button>
    		</form>
	    </div>
    </React.Fragment>
  );
}
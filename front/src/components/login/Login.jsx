import React, { useState } from 'react'
import './reset.css'
import './style.css'
import login from '../../api/login.js'


function Login({auth}) {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const userOneChange = (event) => {
        setUser(event.target.value)
    }

    const passwordOneChange = (event) => {
        setPassword(event.target.value)
    }

    async function handleLogin(e){
        e.preventDefault()
        try {
            const response = await login(password, user)
            const status = response.status
            console.log(status)
            if (status === 200){
                auth(true)
            }
        } catch {
            alert('Login incorrecto, revise sus credenciales')
        }
    }


    return (
        <div className="container">
            <div className="form-container" onSubmit={(e) => handleLogin(e)}>
                <form className="form">
                    <h1 className="title">Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={userOneChange} />
                    <input 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={passwordOneChange} />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    )
}


export default Login;
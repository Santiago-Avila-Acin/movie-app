import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/auth';
import Usuarios from '../../Usuarios';
import './Login.css'
import ErrorMessage from '../NotFound/NotFound';


const Login = () => {
    const auth = useAuth()
    const data = Usuarios()

    const {user,password, login, logout} = useAuth()

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    
    const [error, setError] = useState(false)
    
    const errorMessage = "El usuario o la contraseña son incorrectos."

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userVerification = data.filter((data) => data.user === userName && data.password === userPassword)

        if (userVerification.length > 0) {
            auth.login({userName})
            console.log(userVerification);
        }else{
            
            setError(true)
        }

    }

    return (
        <>
            <h2 className='title'>FlickFinder</h2>
            <form className='form--container' onSubmit={handleSubmit}>
            <input
                className='inputs'
                type="text"
                name="user"
                id="user"
                placeholder='Usuario'
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            
            <input
                className='inputs'
                type="password"
                name="password"
                id="password"
                placeholder='Contraseña'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
            />
            <span className='span--orange align--right'>Recuperar contraseña</span>

            <Link to="/register" className='secondary--color'><span className='span--orange'>¿No tienes cuenta?</span> Registrate</Link>
            
            <button className='button--submit' type="submit">Login</button>

            {error && <ErrorMessage message={errorMessage}/>}
            </form>
        </>
    );
}

export default Login;

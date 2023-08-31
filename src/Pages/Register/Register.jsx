import React, { useState } from 'react';
import { supabase } from "../../supabase/client"
import { Link } from 'react-router-dom';
import Usuarios from '../../Usuarios';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const usuarios = Usuarios()
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    
    const [createAcount, setCreateAcount] = useState(false)
    const navigate = useNavigate();

    const [error, setError] = useState(false)
    const errorMessage = "error"
    
    const validateInputs = () => {
        if (user === "" || email === "" || password === "" || passwordConfirm === "") {
            
        return false;
        } else {
            
        return true;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const result = await supabase.auth.signInWithOtp({
                email: email,
            })
            console.log(result)
        } catch (error){
            console.error(error)
        }
        // if (password !== passwordConfirm) {
        //     setError(true)
        //     {error && alert("Las contraseñas no coinciden")}
        //     return;
        //     }
        //     if (!validateInputs()) {
        //         setError(true)
        //         {error && alert("Los valores ingresados no son correctos")}
        //     return;
        //     }
        //     const newUser = {
        //     id: usuarios.length + 1,
        //     user: user,
        //     password: password,
        //     name: "",
        //     lastName: "",
        //     email: email,
        //     phone: ""
        //     };
        //     usuarios.push(newUser);
        //     setCreateAcount(true);

        //     navigate('/');
        //     console.log(usuarios);
        }

    return (
        <>
            <h2 className='title'>Bienvenidos</h2>
            <form className='form--container register--container' onSubmit={handleSubmit}>

                <div className="input__container">
                    <div className="left">
                        <input
                            className='inputs'
                            type="text"
                            name="usuario"
                            id="usuario"
                            value={user}
                            placeholder='Usuario'
                            onChange={e => setUser(e.target.value)}
                        />
                        <input
                            className='inputs'
                            type="email"
                            name="email"
                            value={email}
                            placeholder='youremail@gmail.com'
                            onChange={e => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="right">
                        <input
                            className='inputs'
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder='Contraseña'
                            onChange={e => setPassword(e.target.value)}
                        />

                        <input
                            className='inputs'
                            type="password"
                            name="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            placeholder='Contraseña'
                            onChange={e => setPasswordConfirm(e.target.value)}
                            />
                </div>
                </div>


                <Link to="/login" className='secondary--color'><span className='span--orange'>¿Ya tienes una cuenta?</span> Inicia Seción</Link>
                <button className='button--submit' type="submit">Registrarse</button>

            </form>
        </>
    );
}

export default Register;

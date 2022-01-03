import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function Login() {

    //state to login
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    //bring data of user
    const {email, password} = user


    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //when user want to login
    const onSubmit = e => {
        e.preventDefault()

        //valid not empty field

        //send to the action function
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="login"
                        />
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta">
                    Get a new account
                </Link>
            </div>
        </div>
    )
}

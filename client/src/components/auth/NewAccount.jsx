import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function NewAccount() {

    //state to login
    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        confirm:'',
    })

    //bring data of user
    const {name, email, password, confirm} = user


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

        //valid 2 password are equals
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Get an account</h1>
                <form >
                <div className="campo-form">
                        <label htmlFor="email">Name</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirm}
                        placeholder="Repeat your password"
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="register"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Go to login
                </Link>
            </div>
        </div>
    )
}

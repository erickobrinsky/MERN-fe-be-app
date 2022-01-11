import React, {useState, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/authentification/authContext'


export default function NewAccount(props) {

    //extract values from context
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext
    let navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const {message, authentificated, registerUser} = authContext
    
    //in case user is already register or duplicate register
    useEffect(() => {
        if(authentificated) {
            navigate('/projects');
        }

        if(message) {
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message, authentificated, props.navigate]);


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
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
            showAlert('Each field is mandatory', 'alerta-error' )
        }

        //valid 2 password are equals
        if(password !== confirm){
            showAlert('Passwords are different', 'alerta-error')
        }

         //send to the action function
         registerUser({
             name,
             email, 
             password
         })
    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Get an account</h1>
                <form 
                    onSubmit={onSubmit}
                >
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

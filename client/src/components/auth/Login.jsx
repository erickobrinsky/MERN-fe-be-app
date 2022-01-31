import React, {useState, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from '../../context/authentification/authContext'


export default function Login(props) {
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext
    let navigate = useNavigate()

    const authContext = useContext(AuthContext)
    const {message, authentificated, loginUser} = authContext

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
        if(email.trim() === '' || password.trim() === ''){
            showAlert('Each field is mandatory', 'alerta-error')
        }
        //send to the action function
        loginUser({email, password})
    }

    return (
        <div className="form-usuario">
              {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1 data-cy="title">Login</h1>
                <form 
                    onSubmit={onSubmit}
                    data-cy="form-login"
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        data-cy="email-input"
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
                        data-cy="submit-login"
                        />
                    </div>
                </form>
                <Link data-cy='new-account' to={'/new-account'} className="enlace-cuenta">
                    Get a new account
                </Link>
            </div>
        </div>
    )
}

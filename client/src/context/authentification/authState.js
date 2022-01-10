import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import {REGISTER_SUCCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from '../../types'
import clientAxios from '../../config/axios'


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authentificated:  null,
        user: null,
        message: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async datos =>{
        try {
            const response = await clientAxios.post('/api/users', datos)
            console.log(response.data);
            
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })


        } catch (error) {
            // console.log(error.response.data.msg);
            const alert ={
                msg: error.response.data.msg, 
                category: 'alerta-error'
            }
      
        dispatch({
            type: REGISTER_ERROR,
            payload: alert
        })
    }
    }

    return(
        <AuthContext.Provider
            value= {{
                token: state.token, 
                authentificated: state.authentificated,
                user: state.user,
                message: state.message,
                registerUser
            }}
        
        >


            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState
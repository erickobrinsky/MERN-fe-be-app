import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/authentification/authContext'

export default function Bar() {
  
        //extraxt info from authentification
        const authContext = useContext(AuthContext)
        const {userAuthenticate, user, logOut} = authContext
    
        useEffect(() => {
            userAuthenticate()
// eslint-disable-next-line react-hooks/exhaustive-deps  
        }, [])
    
       
        
    return (
        <header className="app-header">
            {user ?  <p className="nombre-usuario">Hola <span>{user.user.name}</span></p> : null }
           
            

            <nav className="nav-principal">
                <button
                className="btn btn-primario"
                onClick={()=> logOut()}
              >
                  Log out
                </button>
               
            </nav>
        </header>

    )
}      

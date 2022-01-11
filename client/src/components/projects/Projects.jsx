import React, {useContext, useEffect} from 'react'
import Sidebar from '../layouts/Sidebar'
import Bar from '../layouts/Bar'
import FormTask from '../tasks/FormTask'
import TasksList from '../tasks/TasksList'
import AuthContext from '../../context/authentification/authContext'


export default function Projects() {

    //extraxt info from authentification
    const authContext = useContext(AuthContext)
    const {userAuthenticate} = authContext

    useEffect(() => {
        userAuthenticate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
            <Bar/>

                <main>
                    <FormTask/>
                    <div className="contenedor-tareas">
                        <TasksList/>
                    </div>
                </main>
            </div>

        </div>

        )
}

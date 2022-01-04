import React from 'react'
import Sidebar from '../layouts/Sidebar'
import Bar from '../layouts/Bar'
import FormTask from '../tasks/FormTask'
import TasksList from '../tasks/TasksList'

export default function Projects() {
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

import React from 'react'
import NewProject from '../projects/NewProject'
import ListsProjects from '../projects/ListsProjects'


export default function Sidebar() {

 

    return (
       <aside>
           <h1>MERN <span>Tasks</span></h1>
                <NewProject/>
                <div className="proyectos ">
                    <h2>Your projects</h2>
                    <ListsProjects/>
                </div>
       </aside>
    )
}

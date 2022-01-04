import React from 'react'

export default function Task({task}) {
    return (
             <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state 
                ?
                    (<button
                        type="button"
                        className="completo"
                    >Complete</button>)
                :    
                (<button
                    type="button"
                    className="incompleto"
                >Uncomplete</button>)
            }
            </div>
            <div className="acciones">
                <button
                className="btn btn-primario"
                type="button"
                >Edit</button>

                <button
                  className="btn btn-secundario"
                  type="button"
                >
                    Delete 
                </button>

            </div>
        </li>

    )
}

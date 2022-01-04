import React from 'react'

export default function FormTask() {
    return (
        <div className="formulario">
        <form action="">

            <div className="input-text">
                <input 
                type="text"
                className="input-text"
                placeholder="Name task..."
                name="nameTask"
                />
            </div>
            <div className="input-text">
                <input type="submit"
                className="btn btn-primario btn-submit btn-block"
                value="Add Task"/>    
            
            </div>
        </form>

        </div>
    )
}

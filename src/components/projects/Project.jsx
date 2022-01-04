import React from 'react'

export default function Project({project}) {
    return (
      <li>
          <button
          type="button"
          className="btn btn-blank"
          >

          {project.name}</button>
      </li>
    )
}

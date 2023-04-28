import React from 'react'

function Note(props) {
  return (
    <>
    <div className="col-sm-4 my-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <i className="fa-solid fa-trash mx-2" onClick={props.delete}></i>
        <i className="fa-solid fa-pen-to-square mx-2" onClick={props.update}></i>
      </div>
    </div>
    </div>
    </>
  )
}

export default Note
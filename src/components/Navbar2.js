import React from 'react'


export default function Navbar(props) {

let your = "Sagar";


  return (
    <div className="crow">
    <p>
      This is new code by {your}
    </p>
    <p>Abol Tabol{props.title}</p>
    <h2>Ritesh is a {props.High}</h2>
  </div>
  )
}

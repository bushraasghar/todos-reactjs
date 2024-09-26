// import {inp} from 'react';
// import { useState } from "react";

function Todolist(props:any) {
  return (
    <li className="list-item">
      {props.item}
    <span className="icons">
    <i className="fa-solid fa-trash-can icon-delete"
    onClick={e=>{
      props.deleteitem(props.index)
    }}></i>
    </span>
    </li>
    
  )
}

export default Todolist
import React from 'react'
import '../Css/Person_Style.css';
export const Body=(props)=>
{
    return(
        <div className="Person">
        <h1 onClick={props.click}>My name is: {props.name}</h1>
        <p>My age is: {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change}/>
        </div>
    );
}
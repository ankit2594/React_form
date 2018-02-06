import React from 'react';
import '../Css/Person_Style.css';
 const Person=(props)=>
 {
         return(
             <div className="Person">
             <h1>{props.name}</h1>
             <p>{props.age}</p>
             <input type="text" value={props.clg}/>
             </div>
         );
     
 }
 export var App=(
     <div>
     <Person name="Ankit" age="23" clg="OIST"/>
     <Person name="Rahul" age="22" clg="OIST"/>
     <Person name="Ankit" age="23" clg="OIST"/>
     <Person name="Rahul" age="22" clg="OIST"/>
     <Person name="Ankit" age="23" clg="OIST"/>
     <Person name="Rahul" age="22" clg="OIST"/>
     <Person name="Ankit" age="23" clg="OIST"/>
     <Person name="Rahul" age="22" clg="OIST"/>
     </div>
 );
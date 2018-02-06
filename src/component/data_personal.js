import React from 'react';
import '../Css/Person_Style.css';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css';

export const Personal =(props)=>
{
    return(
        <div className="Person">
        <h1>Personal Data</h1>
        <hr/>
        <p> <b>Name: </b>{props.name}</p><hr/>
        <p><b>Father's name: </b>{props.father}</p><hr/>
       <p> <b>Mother's name: </b>{props.mother}</p><hr/>
        <p><b>Pin code: </b>{props.pin}</p><hr/>
        </div>
    );
}
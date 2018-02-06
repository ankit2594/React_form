import React from 'react';
import '../Css/Person_Style.css';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css';

export const Professional=(props)=>
{
    return(
        <div className="Person">
        <h1>Professional Data</h1>
        <hr/>
       <p> <b>10th marks: </b>{props.tenth}</p><hr/>
        <p><b>12th marks: </b>{props.twelve}</p><hr/>
       <p> <b>BE marks: </b>{props.be}</p><hr/>
        <p><b>Enrollment no. </b>{props.roll}</p><hr/>
        </div>
    );
}
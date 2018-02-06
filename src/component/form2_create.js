import React from 'react';
import '../Css/Person_Style.css';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css';


export const Form2=(props)=>
{
    return(
   <div className="Person">    
  <div className="form-group">
    <label htmlFor="tenth">10th marks:</label>
    <input type="text" className="form-control" id="tenth" placeholder="10th marks"/>
  </div>
    <div className="form-group">
    <label htmlFor="twelve">12th marks:</label>
    <input type="text" className="form-control" id="twelve" placeholder="12th marks"/>
  </div>
      <div className="form-group">
    <label htmlFor="BE">BE marks:</label>
    <input type="text" className="form-control" id="BE" placeholder="BE marks"/>
  </div>
      <div className="form-group">
    <label htmlFor="roll">Enrollment no.:</label>
    <input type="text" className="form-control" id="roll" placeholder="Enrollment no."/>
  </div>
  <button onClick={props.click}  className="btn btn-success">Submit</button>
  </div>
    );
}
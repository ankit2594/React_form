import React from 'react';
import'../Css/Person_Style.css';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css';


export const Form1=(props)=>
{
    return(
   <div className="Person">
  <div className="form-group">
    <label htmlFor="name">Your name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Your Name"/>
  </div>
    <div className="form-group">
    <label htmlFor="father">Father's name:</label>
    <input type="text" className="form-control" id="father" placeholder="Enter Father's name"/>
  </div>
      <div className="form-group">
    <label htmlFor="mother">Mother's name:</label>
    <input type="text" className="form-control" id="mother" placeholder="Enter Mother's name"/>
  </div>
      <div className="form-group">
    <label htmlFor="pin">Pin Code:</label>
    <input type="text" className="form-control" id="pin" placeholder="Enter Pin Code"/>
  </div>
  <button onClick={props.click} className="btn btn-primary">Submit</button>
  </div>
    );
}
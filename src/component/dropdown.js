import React from 'react';
import '../../node_modules/bootstrap3/dist/css/bootstrap.min.css';

export const Dropdown=(props)=>
{
  return(
      <div>
      <select id="drop" onChange={props.change}>
      <option value="select">--select--</option>
      <option value="personal">Personal form</option>
      <option value="professional">Professional form</option>
      </select>
      </div>
  );
}
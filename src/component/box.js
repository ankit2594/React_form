import React, { Component } from 'react';


class Box extends Component {

  render() {
       if(this.props.status)
     {
          return (
    <form >
    <input type="text" placeholder="Enter name" id="name"/>
    
    <button onClick={this.formInput} type="button" className="btn btn-default">button</button>
    
    </form>
    );
     }
   else{
        return (
    <form >
    <input type="text" placeholder="Enter Age" rel="name"/>
    <button onClick={this.formInput} type="button" className="btn btn-default">button</button>
    
    </form>
    );
     

   }
  }
}

export default Box;

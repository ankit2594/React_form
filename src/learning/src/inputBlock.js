import React, { Component }from 'react'
//import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
//import '../../../node_modules/materialize-css/dist/js/materialize.min.js';
//import '../Css/blocks.css'
// import $ from "jquery";
import { Cards_block } from './cardsBlock';

class Input_block extends Component
{   constructor(props){
    super(props);
    this.state={
    show_first:true,
    show_second:false,
    show_third:false
    }
}
    
    render()
    {
    return(
        <div className="inputBlock">
        <div>
        <label htmlFor="name">Enter name:</label>
        <input type="text" onKeyUp={this.show_input_box} id="name" placeholder="Write name of employee"/><br/>
        </div>
        {this.state.show_second?<div>
        <label htmlFor="cmpny">Enter Company:</label>
        <input type="text" onKeyUp={this.show_input_box} id="cmpny" placeholder="Write company name"/><br/>
        </div>:null}
        {this.state.show_third?<div>
        <label htmlFor="roll">Enter Id no.:</label>
        <input type="text" onKeyUp={this.show_input_box} id="roll" placeholder="Write Id no."/>
        </div>:null}
        </div>
    );
}
show_input_box=(event)=>
{  
if(event.keyCode==13)
this.setState({show_second:true});
if(event.keyCode==13)
this.setState({show_third:true});
}
}
export default Input_block;

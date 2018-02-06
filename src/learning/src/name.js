import React,{Component} from 'react'
import {Body} from './name_comp'
class Student extends Component
{
  state={
      student:[
          {name:"Ankit", age:22},
          {name:"Rahul", age:23},
          {name:"Mohit", age:24}
      ]}

      nameChangeHandler=(arg)=>
      {
          this.setState({student:[
          {name:arg, age:21},
          {name:"Kavi", age:32},
          {name:"Paul", age:65}
      ]});
    }
    
      typeHandler=(event)=>
      {
          this.setState({student:[
          {name:"Himanshu", age:21},
          {name:"Kavi", age:32},
          {name:event.target.value, age:65}
      ]}); 
      }

   render()
   {
       return(
        <div>
        <button onClick={this.nameChangeHandler.bind(this,"Name Changed")}>Change name</button>
        <Body name={this.state.student[0].name} age={this.state.student[0].age}></Body>
        <Body name="Nehul" age="23" click={this.nameChangeHandler}>click here to see something</Body>
        <Body name={this.state.student[1].name} age={this.state.student[1].age}/>
        <Body name={this.state.student[2].name} age={this.state.student[2].age} change={this.typeHandler}>Type here to see something</Body>
        </div>
       );

   }
}
export default Student;
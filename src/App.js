import React, { Component } from 'react';
import {Form1} from'./component/form1_create'
import {Form2} from'./component/form2_create'
import {Personal} from'./component/data_personal'
import {Professional} from'./component/data_professional'
import {Dropdown} from './component/dropdown'
import {authContext} from './adalConfig'
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';

class App extends Component {
  state={
    student:{name:"",  father:"", mother:"", pin:"", tenth:"", twelve:"", be:"", roll:""},
    show_personal:false,
   show_professional:false
  };

    logout=(e)=>{
        e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    authContext.logOut();
    }

  form1_click_handler=()=>
  {
    this.setState({student:{
    name:document.getElementById("name").value,
    father:document.getElementById("father").value,
    mother:document.getElementById("mother").value,
    pin:document.getElementById("pin").value,
    tenth:"", 
    twelve:"",
    be:"",
    roll:""}});
  }
  form2_click_handler=()=>
  {
    this.setState({student:{
    name:this.state.student.name,
    father:this.state.student.father,
    mother:this.state.student.mother,
    pin:this.state.student.pin,
    tenth:document.getElementById("tenth").value, 
    twelve:document.getElementById("twelve").value,
    be:document.getElementById("BE").value,
    roll:document.getElementById("roll").value}});
  }
   
   dropdown_handler=()=>
   {
     this.setState({show_personal:false});
     this.setState({show_professional:false});
     let x=document.getElementById('drop');
     console.log(x.value);
     if(x.value==="personal")
     {
       this.setState({show_personal:true});
       this.setState({show_professional:false});
     }
     else if(x.value==="professional")
     {
        this.setState({show_professional:true});
        this.setState({show_personal:false});
     }
   }

  render() {
     console.log(authContext._user)
    return (
      <div>
      <button className="btn btn-primary" onClick={this.logout}>logout</button><br/><br/>
           <Dropdown change={this.dropdown_handler}/>
           <div className="left_block">
               {this.state.show_personal?<Form1 click={this.form1_click_handler}/>:null}
               {this.state.show_professional?<Form2 click={this.form2_click_handler}/>:null}
           </div>
           <div className="right_block">
                <Personal name={this.state.student.name} father={this.state.student.father} mother={this.state.student.mother} pin={this.state.student.pin}/>
                <Professional tenth={this.state.student.tenth} twelve={this.state.student.twelve} be={this.state.student.be} roll={this.state.student.roll}/>
           </div>
      </div>
    );
  }
}
export default App;

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: null
//       }
//       this.form1 = this.form1.bind(this);
//       this.form2 = this.form2.bind(this);
      
//    };
//    form1() {
//         this.setState({data: true})

//    }
//    form2(){
//         this.setState({data: false})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick={this.form1.bind(this)} >form1</button>
//             <button onClick={this.form2.bind(this)}>form1</button>
//             <Box status={this.state.data}/>
            
//          </div>
//       );
//    }
// }


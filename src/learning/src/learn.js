import React, {
    Component
} from 'react';
class BtnClick extends Component {
  constructor(props)
  {
    super(props);
    this.state={
        counter:0
    };
  }
    
handleClick=()=>
{
    this.setState((prevState)=>{
        return {
            counter: prevState.counter+1
        };
            
    });
}
render()
    {
       return (<button onClick={this.handleClick}>{this.state.counter}</button>);
    }

}
export default BtnClick;
import React,{Component} from 'react';
class Button extends Component
{
     render()
     {
         return(
             <button onClick={this.props.onClickFunction}>{this.props.incrmentvalue}</button>
         );
     }
}

const Result=(props)=>
{
    return(props.counter);
}

class Add extends Component
{
    state={
        counter:0
    }
    incrementCounter=(incrementvalue)=>
    {
        console.log("sdj");
        //console.log(incrementvalue);
        this.setState=((prevState)=>{
           counter:prevState.counter+incrementvalue;
           //console.log(this.counter);
        });
    }
    render()
    {
        return(
            <div>            
            <Button incrmentvalue="1" onClickFunction={this.incrementCounter}/>
            <Button incrmentvalue={5} onClickFunction={this.incrementCounter}/>
            <Button incrmentvalue={10} onClickFunction={this.incrementCounter}/>
            <Result counter={this.state.counter}/>
            </div>
        )
    }
}
export default Add;
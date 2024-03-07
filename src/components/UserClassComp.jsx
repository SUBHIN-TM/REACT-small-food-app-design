import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state ={count : 0}
    }
    
    render(){
       
        return(

            <div>
            <h4>PLACE : KOZHIKODE</h4>
            <h3>Kerala</h3>
            <p>Method : {this.props.method} </p>
            <p>use state use : {this.state.count}</p>
            <button onClick={()=>{
               this.setState({
                count:this.state.count + 1
               })
            }}>count increse</button>
        </div>
        )
    }
}

export default UserClass;
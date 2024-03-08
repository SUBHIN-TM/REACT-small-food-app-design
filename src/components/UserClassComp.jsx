import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor");
        this.state ={count : 0,datas:[]} //create state varible in class components
    }

  async componentDidMount(){  //look like useEffect in fuctional component
    console.log("component did mount");
    const data=await fetch("https://api.github.com/users/SUBHIN-TM")
    const json=await data.json()
  //  console.log(json);
    this.setState({   //setUpdate in the way of class is done by like this
        datas:json
    })
  }

  componentDidUpdate(){ //WORK AFTER COMPONENET UPDATE CYCLE COMPLETE
    console.log("comoponent updated");
  }

  componentWillUnmount(){
    console.log("wil work after these component cleared or removed");
  }

    
    render(){
       console.log("render");
        return(
            <div>
                <h2>git name : {this.state.datas.login}</h2>
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
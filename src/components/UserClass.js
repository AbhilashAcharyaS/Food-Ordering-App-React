import React from "react"
class UserClass extends React.Component{
  constructor(props){
    super(props);

     this.state={
        count:0
    }
    console.log(this.props.name +"constructor called");
    
  }

  componentDidMount(){
    console.log(this.props.name +"did mount called");
    
  }

  render(){
    const {name,role,email} = this.props;
    const {count}= this.state;
    console.log(this.props.name +"render called");
    

    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>+</button>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <h4>{email}</h4>
        </div>
    )
  }

}

export default UserClass;
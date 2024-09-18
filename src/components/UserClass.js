import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor called");

    this.state={
      userInfo:{
        name:"Default",
        location:"Default",
        email:"Default"
      }
    }
    
  }

  async componentDidMount(){
    const data= await fetch('https://api.github.com/users/AbhilashAcharyaS');    
    const json= await data.json();
    console.log(json);

    this.setState({
      userInfo :json
    })

    console.log("did mount called");   
  }

  componentDidUpdate(){
    console.log("did update called");
    
  }

  componentWillUnmount(){
    console.log('Will mount called');
    
  }

  render(){
    const {location,html_url,avatar_url} = this.state.userInfo;
    const {name,email,role} = this.props;
    console.log("render called");
    

    return (
        <div className="about-page">
          <div className="img">
          <img src={avatar_url} className="developer-img"/>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{role} </h3>
            <h3>{location}</h3>
            <h4> {email}</h4>
            <h4>Github Profile: <a href={html_url} target="_blank">{html_url} </a></h4>
            </div>
        </div>
    )
  }

}

export default UserClass;
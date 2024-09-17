import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div className="body"> 
            <h1> About Me</h1>    

            <UserClass name={"1st Abhilash Acharya"} role={'Software Developer'} email={'abhilashacharya599@gmail.com'}/>

            <UserClass name={"2nd Abhilash Acharya"} role={'2Software Developer'} email={'2abhilashacharya599@gmail.com'}/>
        </div>
    )
}

export default About;
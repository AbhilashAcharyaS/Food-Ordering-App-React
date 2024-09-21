import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div className="body"> 
            <h1 className="font-bold text-center text-xl mt-6"> About Me</h1>    

            <UserClass name={"Abhilash Acharya"} role={'Software Developer'} email={'abhilashacharya599@gmail.com'}/>

        </div>
    )
}

export default About;
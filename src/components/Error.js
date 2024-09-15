import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err= useRouteError();
    return (
        <div>
            <h1 style={{textAlign:"center"}}>OOPS!!!</h1>
            <h2 style={{textAlign:"center"}}>Something went wrong</h2>
            <h3 style={{textAlign:"center"}}>{err.status}: {err.statusText}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0n36hWr850ivud6q2p3Mn0tR-y_KPAKWpQ&usqp=CAU" style={{margin:'auto', display:"block"}} />
        </div>
    )
}

export default Error;
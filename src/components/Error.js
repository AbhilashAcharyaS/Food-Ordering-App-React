import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err= useRouteError();
    return (
        <div>
            <h1 className="text-center">OOPS!!!</h1>
            <h2 className="text-center">Something went wrong</h2>
            <h3 className="text-center">{err.status}: {err.statusText}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0n36hWr850ivud6q2p3Mn0tR-y_KPAKWpQ&usqp=CAU" className="w-1/3 mx-auto" />
        </div>
    )
}

export default Error;
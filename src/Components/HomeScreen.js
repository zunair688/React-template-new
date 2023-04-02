import {Link} from "react-router-dom";

export const HomeScreen =()=>{

    return (
        <>
            <h1> Home Screen</h1>
            <b> <Link to ={"/calc"}> Go to Calculator </Link></b>
        </>
    )
}
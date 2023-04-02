import {Link} from "react-router-dom";

export const  Calculator =()=>{

    return (
        <>
            <h2> Hello calculator</h2>
            <button className="btn btn-primary btn-sm"> Add two numbers </button>
            <b>
                <Link to={"/"}>Go to Home</Link>
            </b>
        </>
    )
}

export default function Greetings(props){
    return(
        <>
            {/* Under fragment */}
         <h1>Hello {props.username}{props.password && `-${props.password}`}</h1>
        </>
    )
}
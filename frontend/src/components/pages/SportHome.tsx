import { Link, useParams } from "react-router"


const SportHome = ()=>{
    
    const { sport } = useParams();

    return (
        <>
            <Link to="/">New Sport</Link>
            <h1>{sport}</h1>
        </>
    )   
}

export default SportHome
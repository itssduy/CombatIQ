import { Link } from "react-router"

const Home = ()=>{
    return (
        <>
            <div className="home">
                <h2>Choose Your Sport</h2>
                <div className="sport-cards">
                    <Link to='/mma' className="sport-card">
                        <h3>MMA</h3>
                    </Link>
                    <Link to='/boxing' className="sport-card">
                        <h3>Boxing</h3>
                    </Link>
                    <Link to='/kickboxing' className="sport-card">
                        <h3>Kickboxing</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Home
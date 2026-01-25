import { Outlet } from "react-router"
import SportsHeader from "../shared/SportsHeader"


const SportLayout = ()=>{


    return (
        <>
            <SportsHeader/>
            <main>
                <Outlet/>
            </main> 
        </>
       
    )   
}

export default SportLayout
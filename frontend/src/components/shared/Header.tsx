import '../../styles/Header.css'
import { Link } from 'react-router'

const Header = ()=>{


    return (
        <>
            <nav>
                <h1 className='logo'><Link to={`/`}>CombatIQ</Link></h1>   
            </nav>
        </>
    )
}


export default Header
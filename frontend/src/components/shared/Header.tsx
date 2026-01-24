import '../../styles/Header.css'

const Header = ()=>{
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <li>Events</li>
                    <li>Rankings</li>

                </ul>

                <h1>CombatIQ</h1>
                
                <ul className="nav-list">
                    <li>Athletes</li>
                    <li>News</li>
                </ul>
            </nav>
        </>
    )
}


export default Header
import '../../styles/Header.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router'

const SportHeader = ()=>{
    const [getSports, setSports] = useState<string[]>([])
    const {sport} = useParams();

    useEffect(()=>{
        setSports([
            "Boxing",
            "MMA",
            "Kickboxing",
            "Muay Thai"
        ])
    }, [])
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <li><Link to={`/${sport}/athletes`} className='list-item'>Athletes</Link></li>
                    <li><Link to={`/${sport}/rankings`} className='list-item'>Rankings</Link></li>
                </ul>

                <h1 className='logo'><Link to={`/${sport}`}>CombatIQ</Link></h1>   

                <ul className="nav-list">
                    <li><Link to={`/${sport}/news`} className='list-item'>News</Link></li>
                    <li><Link to={`/${sport}/events`} className='list-item'>Events</Link></li>
                </ul>

            </nav>
        </>
    )
}


export default SportHeader
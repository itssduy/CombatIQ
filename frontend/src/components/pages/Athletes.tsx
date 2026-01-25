import { useState, useEffect } from 'react'
import type { Athlete } from '../../types/athlete.ts'

const Athletes = ()=>{
    const [getAthletes, setAthletes] = useState<Athlete[]>([])
    
    useEffect(()=>{
        setAthletes([])
    }, [])
            

    return (
        <>
            Athletes work!
            <ul>
                {getAthletes.map((fighter)=>{
                    return (
                    <li key={fighter.id}>
                        <h3>{fighter.name}</h3>
                    </li>)
                })}

            </ul>
            
        </>
    )
}


export default Athletes
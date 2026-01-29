import { useState, useEffect } from 'react'
import type { Athlete } from '../../types/athlete.ts'
import AthletesData from '../../data/athletes.json'
import { useParams } from 'react-router' 

const Athletes = ()=>{
	const {sport} = useParams(); 
	const [getAthletes, setAthletes] = useState<Athlete[]>([])
    
	useEffect(()=>{
		try {
			setAthletes(AthletesData);
		} catch (err) {
			console.log(err)
			setAthletes([])
		}
	},[])


    return (
        <>
            Athletes work!
            <ul>
	    {getAthletes.map((fighter)=>{
		    if (fighter.sport.toLowerCase() == sport.toLowerCase()){
			    return (
				    <li key={fighter.id}>
				    <h3>{fighter.name}</h3>
				    </li>)
		    }
	    })}

            </ul>
            
        </>
    )
}


export default Athletes

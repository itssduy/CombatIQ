import { useState, useEffect } from 'react'

const Rankings = ()=>{
    const [getRankings, setRankings] = useState([]);
    useEffect(()=>{
      (async ()=>{
        const res = await fetch('/data/rankings.json');
        const data = await res.json();
        setRankings(data.rankings);  
      })();
    }, [])
    return (
        <>
          <ul>
            {getRankings.map((ranking)=>{
              return <li key={ranking.id}>
                {ranking.fighterId} 
              </li>
            })
            }
          </ul>
        </>
    )
}


export default Rankings

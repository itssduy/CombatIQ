import { useState } from 'react'

const Athletes = ()=>{
    const [useAthletes, setAthletes] = useState([])

    setAthletes([
        {
            "name": "Bob"

        }
    ])
    return (
        <>
            Athletes work!
        </>
    )
}


export default Athletes
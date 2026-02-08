import { useEffect, useState } from 'react'

const Events = ()=>{
  const [getEvents, setEvents] = useState([]);
  useEffect(
    ()=>{
      try {
        (async ()=>{
          const res = await fetch('/data/events.json')
          const data = await res.json()
          setEvents(data.events);
          console.log(data);
        })();
      } catch (err) {
        console.log(err);
        setEvents([]);
      }
    },
    [])
    return (
      <>
      <ul>
      {getEvents.map((event)=>{
        return <li key={event.Id}> 
        {event.Name} 
        </li>
      })}
      </ul>
      </>
    )
}


export default Events

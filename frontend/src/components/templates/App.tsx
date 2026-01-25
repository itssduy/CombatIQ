import { Outlet } from 'react-router'
import '../../styles/App.css'
import Header from '../shared/Header'

const App = ()=>{

    return (
        <>
            <Outlet/>
        </>
        
    )   
}

export default App
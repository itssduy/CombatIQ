import { Outlet } from 'react-router'
import Header from '../shared/Header'

const App = ()=>{
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )   
}

export default App
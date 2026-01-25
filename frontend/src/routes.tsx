import { Children } from "react"
import Athletes from "./components/pages/Athletes"
import Events from "./components/pages/Events"
import Home from "./components/pages/Home"
import News from "./components/pages/News"
import Rankings from "./components/pages/Rankings"
import SportHome from "./components/pages/SportHome"
import App from "./components/templates/App"
import Layout from "./components/templates/Layout"
import SportLayout from "./components/templates/SportLayout"
const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Layout/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    }
                ]
            },
            {
                path: ':sport',
                element: <SportLayout/>,
                children: [
                    {
                        index: true,
                        element: <SportHome/>
                    },
                    {
                        path: 'athletes',
                        element: <Athletes/>
                    },
                    {
                        path: 'news',
                        element: <News/>
                    },
                    {
                        path: 'rankings',
                        element: <Rankings/>
                    },
                    {
                        path: 'events',
                        element: <Events/>
                    },
                ]
            },
            
        ]
    }
]

export default routes
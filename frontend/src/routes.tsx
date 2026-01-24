import Athletes from "./components/pages/Athletes"
import Events from "./components/pages/Events"
import Home from "./components/pages/Home"
import News from "./components/pages/News"
import Rankings from "./components/pages/Rankings"
import App from "./components/templates/App"
const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/athletes',
                element: <Athletes/>
            },
            {
                path: '/news',
                element: <News/>
            },
            {
                path: '/rankings',
                element: <Rankings/>
            },
            {
                path: '/events',
                element: <Events/>
            },
        ]
    }
]

export default routes
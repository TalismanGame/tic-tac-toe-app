
import MainBoard from '../screens/MainBoard'
import Home from '../screens/Home'
import CreateGame from '../screens/CreateGame'
import NotFoundPage from '../screens/NotFoundPage'


export const routes = [
    {
        path: "/",
        children: <Home />,
        isPrivate: false,
        exact: true
    },
    {
        path: "/create-game",
        children: <CreateGame />,
        isPrivate: true,
        exact: false
    },
    {
        path: "/board",
        children: <MainBoard />,
        isPrivate: true,
        exact: false
    },
    {
        path: "/404",
        children: <NotFoundPage />,
        isPrivate: false,
        exact: true
    },
]
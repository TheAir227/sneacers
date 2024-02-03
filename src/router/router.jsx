import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Favorits from "../pages/Favorits";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/favorits",
                element: <Favorits />,
            }
        ]
    }
])

export default router
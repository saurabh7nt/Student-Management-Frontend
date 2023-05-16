import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import Add_Student from "./Components/Add_Student";
import Show_Student from "./Components/Show_Student";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        
        children: [
            {
                path: 'home',
                element: <Home/> 
            },
            {
                path: 'student/add',
                element: <Add_Student/>
            },
            {
                path: 'student/show',
                element: <Show_Student/> 
            }
        ]


    }
])

export default router;
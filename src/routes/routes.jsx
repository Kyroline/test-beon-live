import { createBrowserRouter } from "react-router-dom";
import CourseMobisoPage from "../pages/CourseMobiso";

import MainLayout from "../layouts/MainLayout";
import CourseMobisoPageLogout from "../pages/CourseMobisoLogout";
import GuestLayout from "../layouts/GuestLayout";

const router = createBrowserRouter([
    {
        path: 'course',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <CourseMobisoPage />
            }
        ]
    },
    {
        path: '',
        element: <GuestLayout/>,
        children: [
            {
                path: '',
                element: <CourseMobisoPageLogout />
            },
        ]
    }
])

export default router
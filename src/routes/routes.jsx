import { createBrowserRouter } from "react-router-dom";
import CourseMobisoPage from "../pages/CourseMobiso";

import MainLayout from "../layouts/MainLayout";
import CourseMobisoPageLogout from "../pages/CourseMobisoLogout";
import CourseMobisoMobilePage from "../pages/CourseMobisoMobile";
import GuestLayout from "../layouts/GuestLayout";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: 'course',
                element: <CourseMobisoPage />
            },
            {
                path: 'course/mobile',
                element: <CourseMobisoMobilePage />
            },
        ]
    },
    {
        path: 'guest',
        element: <GuestLayout/>,
        children: [
            {
                path: 'course',
                element: <CourseMobisoPageLogout />
            },
        ]
    }
])

export default router
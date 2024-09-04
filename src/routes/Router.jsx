import { Navigate } from "react-router-dom";
import Loadable from "../components/loadable/Loadable";
import { lazy } from "react";

/** Layouts */
const FullLayout = Loadable(lazy(() => import('../components/layout/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../components/layout/BlankLayout')));
const Error = Loadable(lazy(() => import('../components/views/notFound/Error')));

const Home = Loadable(lazy(() => import('../components/views/home/Home')));
const Login = Loadable(lazy(() => import('../components/views/login/Login')));

const Router = [
    {
        path: '/',
        element: <FullLayout />,
        children: [
            { path: '/', element: <Navigate to="/Login" /> },

            { path: '/home', exact: true, element: <Home /> },
            { path: '*', element: <Navigate to="/auth/404" /> },
        ]
    },
    {
        path: '/',
        element: <BlankLayout />,
        children: [
            { path: '/Login', exact: true, element: < Login /> },

            { path: '/auth/404', element: <Error /> },
            { path: '*', element: <Navigate to="/auth/404" /> },
        ],
    },
]

export default Router;
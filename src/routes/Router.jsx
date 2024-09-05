import { Navigate } from "react-router-dom";
import Loadable from "../components/loadable/Loadable";
import { lazy } from "react";

/** 
 * Dynamically imported layouts and components using React.lazy 
*/
const FullLayout = Loadable(lazy(() => import('../components/layout/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../components/layout/BlankLayout')));
const Error = Loadable(lazy(() => import('../components/views/notFound/Error')));
const Home = Loadable(lazy(() => import('../components/views/home/Home')));
const Login = Loadable(lazy(() => import('../components/views/login/Login')));
const Tasks = Loadable(lazy(() => import('../components/views/Tasks/Tasks')));

/**
 * Defines the application's route configuration.
 * 
 * @typedef {Object} Route
 * @property {string} path - The URL path for the route.
 * @property {JSX.Element} element - The React component to render for this route.
 * @property {Array<Route>} [children] - An optional array of child routes.
 * 
 * @type {Route[]}
 */
const Router = [
    {
        path: '/',
        element: <FullLayout />,
        children: [
            /** Redirects the root path to the Login page. */
            { path: '/', element: <Navigate to="/login" /> },

            { path: '/home', element: <Home /> },
            { path: '/tasks', element: <Tasks /> },

            /** Catch-all route for undefined paths, redirects to the 404 error page. */
            { path: '*', element: <Navigate to="/not_found" /> },
        ]
    },
    {
        path: '/',
        element: <BlankLayout />,
        children: [
            { path: '/login', element: <Login /> },

            { path: '/not_found', element: <Error /> },

            /** Catch-all route for undefined paths, redirects to the 404 error page. */
            { path: '*', element: <Navigate to="/not_found" /> },
        ],
    },
];

export default Router;

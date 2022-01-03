import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Members = Loadable(lazy(() => import("./Members")));

const memberRoutes = [
    {
        path: '/members',
        element: <Members />,
    },
]

export default memberRoutes

import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Movements = Loadable(lazy(() => import("./Movements")));

const movementRoutes = [
    {
        path: '/movements',
        element: <Movements />,
    },
]

export default movementRoutes

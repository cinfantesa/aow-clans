import React from 'react'
import { Redirect } from 'react-router-dom'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import memberRoutes from './views/members/MemberRoutes';
import movementRoutes from './views/movements/MovementRoutes';

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
  ...dashboardRoutes,
  ...memberRoutes,
  ...movementRoutes,
  ...redirectRoute,
  ...errorRoute,
]

export default routes

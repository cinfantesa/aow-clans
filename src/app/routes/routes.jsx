import AuthGuard from "app/auth/AuthGuard";
import NotFound from "app/views/sessions/NotFound";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import MatxLayout from '../components/MatxLayout/MatxLayout'
import memberRoutes from '../views/members/MemberRoutes';
import movementRoutes from '../views/movements/MovementRoutes';

export const AllPages = () => {
  const all_routes = [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MatxLayout />
        </AuthGuard>
      ),
      children: [
        ...dashboardRoutes,
        ...memberRoutes,
        ...movementRoutes,
      ],
    },
    ...sessionRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return all_routes;
}

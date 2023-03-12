import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes/routes';

type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <>123</>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <>123</>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <>123</>,
    },
};

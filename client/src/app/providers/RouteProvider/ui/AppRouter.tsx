import { FC, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouteProps, routeConfig } from '../config/ui/routeConfig';

import { RequireAuth } from './RequireAuth';

import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter: FC = (props) => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

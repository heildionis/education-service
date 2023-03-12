import { getUserAuthData } from 'entities/User';
import { FC, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/ui/routeConfig';

export const AppRouter: FC = (props) => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(
        () => Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        }),
        [isAuth],
    );

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback='loading...'>
                            <div className='page-wrapper'>{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

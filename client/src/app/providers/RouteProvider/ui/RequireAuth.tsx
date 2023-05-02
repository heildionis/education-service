import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { getRouteHome } from '@/shared/config/routes/routes';

interface RequireAuthProps {
    children: JSX.Element
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return (
            <Navigate
                to={getRouteHome()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

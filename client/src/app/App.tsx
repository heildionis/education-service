import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/RouteProvider/ui/AppRouter';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback=''>
                <div className='content-page'>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

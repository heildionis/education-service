import { checkAuth } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/lib/components/Container/Container';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/RouteProvider/ui/AppRouter';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback=''>
                <Navbar />
                <Container>
                    <div className='content-page'>
                        <AppRouter />
                    </div>
                </Container>
            </Suspense>
        </div>
    );
};

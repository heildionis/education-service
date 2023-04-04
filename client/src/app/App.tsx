import { checkAuth, getUserInited } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/lib/components/Container/Container';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { useSelector } from 'react-redux';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/RouteProvider/ui/AppRouter';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    {inited && (
                        <>
                            <Container className='container'>
                                {inited && <Sidebar className='sidebar' />}
                                <AppRouter />
                            </Container>
                        </>
                    )}
                </div>
            </Suspense>
        </div>
    );
};

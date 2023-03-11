import { LoginForm } from 'features/AuthByUsername';
import { useEffect } from 'react';

export const App = () => {
    useEffect(() => {
        console.log('init');
    }, []);

    return (
        <div className='app'>
            <div className='wrapper'>
                <LoginForm />
            </div>
        </div>
    );
};

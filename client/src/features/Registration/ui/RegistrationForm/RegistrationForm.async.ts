import { lazy } from 'react';

// export const RegistrationFormAsync = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./RegistrationForm')), 1500);
// }));

export const RegistrationFormAsync = lazy(() => import('./RegistrationForm'));

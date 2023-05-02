export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    PROFILE = 'profile',
    FILES = 'files',
    NOT_FOUND = 'notFound'
}

export const getRouteHome = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteFile = (id: string) => `/files/${id}`;

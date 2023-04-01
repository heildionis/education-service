export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    PROFILE = 'profile',
    FILES = 'file',
    NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.FILES]: '/files',
    [AppRoutes.NOT_FOUND]: '*',
};

import { useEffect, useMemo, useState } from 'react';

import { TelegramUser, WebApp } from './types/telegram';

export interface ITelegramContext {
    webApp?: WebApp;
    user?: TelegramUser;
}

export const useTelegram = () => {
    const [webApp, setWebApp] = useState<WebApp | null>(null);

    useEffect(() => {
        const app = (window as any).Telegram?.WebApp;
        if (app) {
            app.ready();
            setWebApp(app);
        }
    }, []);

    const value = useMemo(() => (webApp
        ? {
            webApp,
            unsafeData: webApp.initDataUnsafe,
            user: webApp.initDataUnsafe.user,
        }
        : {}), [webApp]);

    return value;
};

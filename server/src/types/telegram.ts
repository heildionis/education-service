import { Context, Scenes } from 'telegraf';

interface TelegramSession extends Scenes.SceneSession {
    sessionProp: number;
}

export interface TelegramContext extends Context {
    contextProp: string;
    session: TelegramSession;
    scene: Scenes.SceneContextScene<TelegramContext>;
}

export interface Params {
    text?: string;
    color?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
}

export interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    setText: (text: string) => void;
    onClick: (callback: any) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
    setParams: (params: Params) => void;
}

export interface TelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
}

export interface WebApp {
    initData: string;
    initDataUnsafe: {
        query_id: string;
        user: TelegramUser;
        auth_date: string;
        hash: string;
    };
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: {
        link_color: string;
        button_color: string;
        button_text_color: string;
        secondary_bg_color: string;
        hint_color: string;
        bg_color: string;
        text_color: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
        isVisible: boolean;
    };
    MainButton: MainButton;
    HapticFeedback: any;
    close: () => void;
    ready: () => void;
}

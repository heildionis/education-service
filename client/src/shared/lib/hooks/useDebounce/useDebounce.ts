import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timerRef = useRef() as MutableRefObject<ReturnType <typeof setTimeout>>;

    return useCallback((...args: any[]) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [delay, callback]);
};

import {
    FC,
    ReactNode,
    MouseEvent,
    MutableRefObject,
    useState,
    useRef,
    useEffect,
    useCallback,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

const ANIMATION_DELAY = 400;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={onCloseHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

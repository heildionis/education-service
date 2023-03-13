import React, {
    useState,
    MouseEvent,
    FC,
    useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { generateRandomNumber } from 'shared/lib/generateRandomNumber/generateRandomNumber';
import cls from './RippleEffect.module.scss';

interface RippleEffectProps {
    className?: string;
    duration?: number;
    color?: string;
}

interface Ripple {
    key: number;
    x: number;
    y: number;
    size: number;
}

const ripplePosition = (ripple: Ripple, duration: number, color?: string) => ({
    top: ripple.y,
    left: ripple.x,
    width: ripple.size,
    height: ripple.size,
    animationDuration: `${duration}ms`,
    color,
});

export const RippleEffect: FC<RippleEffectProps> = ({ className, duration = 800, color }) => {
    const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

    const onAnimationEnd = useCallback((key: number) => {
        setRippleArray((rippleElements) => rippleElements.filter((element) => element.key !== key));
    }, []);

    const addRipple = (event: MouseEvent) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const isWidthContainerGreater = rippleContainer.width > rippleContainer.height;
        const size = isWidthContainerGreater ? rippleContainer.width : rippleContainer.height;

        const radius = size / 2;
        const key = generateRandomNumber();
        const x = event.pageX - rippleContainer.x - radius;
        const y = event.pageY - rippleContainer.y - radius;

        const newRipple: Ripple = {
            key,
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div
            className={classNames(cls.RippleContainer, {}, [className])}
            onMouseDown={addRipple}
        >
            {rippleArray.length > 0 && rippleArray.map((ripple) => (
                <span
                    key={ripple.key}
                    style={ripplePosition(ripple, duration, color)}
                    onAnimationEnd={() => onAnimationEnd(ripple.key)}
                />
            ))}
        </div>
    );
};

import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';

import { RippleEffect } from '../RippleEffect/RippleEffect';

import cls from './RippleWrapper.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface RippleWrapper extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    rippleClassName?: string;
    animationDuration?: number;
    children: ReactNode;
}

export const RippleWrapper: FC<RippleWrapper> = memo((props: RippleWrapper) => {
    const {
        className,
        rippleClassName,
        animationDuration = 1500,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.RippleWrapper, {}, [className])} {...otherProps}>
            {children}
            <RippleEffect
                className={rippleClassName}
                duration={animationDuration}
            />
        </div>
    );
});

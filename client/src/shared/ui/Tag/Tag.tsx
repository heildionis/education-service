import {
    FC,
    HTMLAttributes,
    ReactNode,
    memo,
} from 'react';

import cls from './Tag.module.scss';

import { RippleEffect } from '@/shared/animations/components/RippleEffect';
import { Additional, Mods, classNames } from '@/shared/lib/classNames/classNames';

type TagColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
type TagSize = 'small' | 'medium' | 'large';
type TagVariant = 'filled' | 'outlined';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    children: ReactNode;
    variant?: TagVariant;
    size?: TagSize;
    color?: TagColor;
    disabled?: boolean;
    animated?: boolean;
    animationDuration?: number;
}

export const Tag: FC<TagProps> = memo((props: TagProps) => {
    const {
        className,
        children,
        variant = 'filled',
        size = 'medium',
        color = 'primary',
        disabled = false,
        animated = true,
        animationDuration = 800,
        ...otherProps
    } = props;
    const isAnimated = animated && !disabled;
    const additional: Additional = [
        className,
        cls[variant],
        cls[size],
        cls[color],
    ];

    const mods: Mods = { [cls.disabled]: disabled };

    return (
        <span className={classNames(cls.Tag, mods, additional)} {...otherProps}>
            {children}
            {isAnimated && (
                <RippleEffect
                    className={cls.ripple}
                    duration={animationDuration}
                />
            )}
        </span>
    );
});

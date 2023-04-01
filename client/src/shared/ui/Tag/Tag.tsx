import {
    FC,
    HTMLAttributes,
    ReactNode,
    memo,
} from 'react';
import { Additional, Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Tag.module.scss';

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
}

export const Tag: FC<TagProps> = memo((props: TagProps) => {
    const {
        className,
        children,
        variant = 'filled',
        size = 'medium',
        color = 'primary',
        disabled = false,
        ...otherProps
    } = props;

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
        </span>
    );
});

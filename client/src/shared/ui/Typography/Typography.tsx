import {
    FC,
    HTMLAttributes,
    memo,
    ReactNode,
} from 'react';

import cls from './Typography.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type TypographyAlign = 'center' | 'left' | 'right' | 'inherit'
export type TypographyColor = 'primary' | 'secondary' | 'inverted' | 'gray';
export type TypographyVariant = 'title' |'subtitle' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
export type TypographySize = 'small' | 'medium' | 'large' | 'disabled';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    variant?: TypographyVariant;
    color?: TypographyColor;
    align?: TypographyAlign;
    noWrap?: boolean;
    fullWidth?: boolean;
    size?: TypographySize;
    children: ReactNode;
}

export const Typography: FC<TypographyProps> = memo((props: TypographyProps) => {
    const {
        className,
        variant = 'p',
        color = 'primary',
        align = 'inherit',
        noWrap = false,
        children,
        size = 'disabled',
        fullWidth,
        ...otherProps
    } = props;
    const mods: Mods = { [cls.noWrap]: noWrap, [cls.fullWidth]: fullWidth };
    const additional: Array<string | undefined> = [className, cls[color], cls[align], cls[variant], cls[size]];

    const classes = classNames(cls.Typography, mods, additional);

    return (
        <div className={classes}>
            {variant === 'h1' && <h1 className={classes} {...otherProps}>{children}</h1>}
            {variant === 'h2' && <h2 className={classes} {...otherProps}>{children}</h2>}
            {variant === 'h3' && <h3 className={classes} {...otherProps}>{children}</h3>}
            {variant === 'h4' && <h4 className={classes} {...otherProps}>{children}</h4>}
            {variant === 'h5' && <h5 className={classes} {...otherProps}>{children}</h5>}
            {variant === 'h6' && <h6 className={classes} {...otherProps}>{children}</h6>}
            {variant === 'div' && <div className={classes} {...otherProps}>{children}</div>}
            {(
                variant === 'p'
                || variant === 'title'
                || variant === 'subtitle'
            ) && <p className={classes} {...otherProps}>{children}</p>}
        </div>
    );
});

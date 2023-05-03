import {
    FC,
    HTMLAttributes,
    memo,
    ReactNode,
} from 'react';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import cls from './Typography.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type TypographyAlign = 'center' | 'left' | 'right' | 'inherit'
export type TypographyVariant = 'title' |'subtitle' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
export type TypographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    variant?: TypographyVariant;
    component?: TypographyComponent;
    color?: UIVariant;
    align?: TypographyAlign;
    noWrap?: boolean;
    fullWidth?: boolean;
    children: ReactNode;
}

const mapHeaders: Record<TypographyVariant, TypographyTags> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    div: 'div',
    p: 'p',
    title: 'h4',
    subtitle: 'h5',
};

export const Typography: FC<TypographyProps> = memo((props: TypographyProps) => {
    const {
        className,
        children,
        variant = 'p',
        component = 'p',
        color = 'primary',
        align = 'inherit',
        noWrap = false,
        fullWidth = false,
        ...otherProps
    } = props;

    const Tag = mapHeaders[component];

    const mods: Mods = {
        [cls.noWrap]: noWrap,
        [cls.fullWidth]: fullWidth,
    };

    const additional: Array<string | undefined> = [
        className,
        cls[color],
        cls[align],
        variants[variant],
    ];

    const classes = classNames(cls.Typography, mods, additional);

    return (
        <Tag className={classes} {...otherProps}>{children}</Tag>
    );
});

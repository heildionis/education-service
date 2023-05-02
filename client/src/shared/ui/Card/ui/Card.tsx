import {
    FC, HTMLAttributes, ReactNode,
} from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type CardVariant = 'primary' | 'secondary';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
}

export const Card: FC<CardProps> = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'primary',
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Card, {}, [className, cls[variant]])} {...otherProps}>
            {children}
        </div>
    );
};

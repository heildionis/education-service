import {
    FC, HTMLAttributes, ReactNode,
} from 'react';

import { UIVariant } from '../../global';
import variants from '../global.module.scss';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: UIVariant;
}

export const Card: FC<CardProps> = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'soft',
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Card, {}, [className, variants[variant]])} {...otherProps}>
            {children}
        </div>
    );
};

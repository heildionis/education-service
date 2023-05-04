import {
    ComponentPropsWithoutRef,
    ReactNode,
    forwardRef,
} from 'react';

import { UIVariant } from '../../global';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    children: ReactNode;
    variant?: UIVariant;
    fullWidth?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const {
        className,
        children,
        variant = 'soft',
        fullWidth,
        ...otherProps
    } = props;

    return (
        <div
            ref={ref}
            className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

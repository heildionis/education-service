import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';
import { RippleEffect } from 'shared/animations/components';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardAction.module.scss';

interface CardActionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    animationDuration?: number;
    children: ReactNode;
}

export const CardAction: FC<CardActionProps> = memo((props: CardActionProps) => {
    const {
        className,
        animationDuration = 1500,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.CardAction, {}, [className])} {...otherProps}>
            {children}
            <RippleEffect duration={animationDuration} />
        </div>
    );
});

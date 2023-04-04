import {
    ButtonHTMLAttributes,
    ReactNode,
    FC,
    memo,
} from 'react';
import { RippleEffect } from 'shared/animations/components/RippleEffect';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'clear'
export type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   isAnimated?: boolean
   variant?: ButtonVariant;
   size?: ButtonSize;
   square?: boolean;
   animationDuration?: number;
   fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        disabled,
        variant = 'primary',
        isAnimated = true,
        size = 'small',
        square,
        animationDuration = 1400,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.square]: square,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
            {isAnimated
                && !disabled
                && <RippleEffect className={cls.ripple} duration={animationDuration} />}
        </button>
    );
});

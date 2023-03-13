import {
    ButtonHTMLAttributes,
    ReactNode,
    FC,
    memo,
} from 'react';
import { RippleEffect } from 'shared/animations/components';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   isAnimated?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        disabled,
        isAnimated = true,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
            {isAnimated && <RippleEffect duration={1500} />}
        </button>
    );
});

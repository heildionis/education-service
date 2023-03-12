import {
    ButtonHTMLAttributes,
    ReactNode,
    FC,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        disabled,
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
        </button>
    );
};

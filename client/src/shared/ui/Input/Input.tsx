import {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    memo,
} from 'react';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import cls from './Input.module.scss';

import { Additional, classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'label' | 'size'>
type InputSize = 'small' | 'medium' | 'large';

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    size?: InputSize,
    variant?: UIVariant;
    fullWidth?: boolean;
}

export const ForwardInput = (forwardRef<HTMLInputElement, InputProps>(((props, ref) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        fullWidth = false,
        size = 'small',
        variant = 'primary',
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const additional: Additional = [
        cls[size],
        variants[variant],
        className,
    ];

    return (
        <input
            placeholder={placeholder}
            ref={ref}
            className={classNames(cls.input, { [cls.fullWidth]: fullWidth }, additional)}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
})));

export const Input = memo(ForwardInput);

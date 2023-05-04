import {
    ChangeEvent,
    InputHTMLAttributes,
} from 'react';

import { UIVariant } from '../global';

import cls from './Input.module.scss';

import { typedMemo } from '@/shared/constants/types';
import { Additional, Mods, classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'label' | 'size'>
type InputSize = 'small' | 'medium' | 'large';

interface InputProps<T extends string> extends HTMLInputProps {
    className?: string;
    onChange?: (value: T) => void;
    value?: string;
    size?: InputSize,
    variant?: UIVariant;
    fullWidth?: boolean;
    readOnly?: boolean;
}

export const Input = typedMemo(<T extends string>(props: InputProps<T>) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        fullWidth = false,
        size = 'small',
        variant = 'primary',
        readOnly = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value as T);
    };

    const additional: Additional = [
        cls[size],
        cls[variant],
        className,
    ];

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.readOnly]: readOnly,
    };

    return (
        <input
            placeholder={placeholder}
            className={classNames(cls.input, mods, additional)}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
            disabled={readOnly}
            {...otherProps}
        />
    );
});

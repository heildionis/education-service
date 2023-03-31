import {
    ChangeEvent,
    FC,
    forwardRef,
    InputHTMLAttributes,
    memo,
    MutableRefObject,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'label'>

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    fullWidth?: boolean;
}

export const ForwardInput = (forwardRef<HTMLInputElement, InputProps>(((props, ref) => {
    const {
        className,
        onChange,
        value,
        placeholder,
        fullWidth = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper)}>
            {placeholder && <div className={cls.label}>{`${placeholder}`}</div>}
            <input
                ref={ref}
                className={classNames(cls.input, { [cls.fullWidth]: fullWidth }, [className])}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
})));

export const Input = memo(ForwardInput);

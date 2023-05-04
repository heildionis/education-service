import { HTMLInputTypeAttribute } from 'react';

export interface AuthInputType<T> {
    label: string;
    type: HTMLInputTypeAttribute;
    value: T;
    onChange: (value: T) => void;
    placeholder: string;
}

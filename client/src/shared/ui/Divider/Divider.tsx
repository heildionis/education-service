import { FC, memo } from 'react';

import cls from './Divider.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type DividerVariant = 'small' | 'medium' | 'large';

interface DividerProps {
    className?: string;
    variant?: DividerVariant;
}

export const Divider: FC<DividerProps> = memo((props: DividerProps) => {
    const { className, variant = 'small' } = props;

    return (
        <hr className={classNames(cls.Divider, {}, [className, cls[variant]])} />
    );
});

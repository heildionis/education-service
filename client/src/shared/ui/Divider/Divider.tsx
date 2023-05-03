import { FC, memo } from 'react';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import cls from './Divider.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type DividerVariant = 'small' | 'medium' | 'large';

interface DividerProps {
    className?: string;
    variant?: DividerVariant;
    color?: UIVariant;
}

export const Divider: FC<DividerProps> = memo((props: DividerProps) => {
    const { className, variant = 'small', color = 'primary' } = props;

    return (
        <hr className={classNames(cls.Divider, {}, [className, variants[variant], cls[color]])} />
    );
});

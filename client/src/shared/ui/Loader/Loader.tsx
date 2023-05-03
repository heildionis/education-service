import { FC, memo } from 'react';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
   className?: string;
   variant?: UIVariant;
}

export const Loader: FC<LoaderProps> = memo((props) => {
    const { className, variant = 'primary' } = props;

    return (
        <div className={classNames(cls.Loader, {}, [className, variants[variant]])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
});

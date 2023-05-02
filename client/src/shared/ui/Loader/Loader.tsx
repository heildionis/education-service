import { FC, memo } from 'react';

import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
   className?: string;
}

export const Loader: FC<LoaderProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Loader, {}, [className])}>
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

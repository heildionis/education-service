import {
    FC, memo,
} from 'react';

import cls from './FileProgress.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface FileProgressProps {
    className?: string;
    progress: number;
    loading?: boolean;
    max?: string;
}

export const FileProgress: FC<FileProgressProps> = memo((props: FileProgressProps) => {
    const {
        className,
        progress,
        max = '100',
        loading,
    } = props;

    return (
        <progress
            className={classNames(cls.FileProgress, {}, [className])}
            value={progress}
            max={max}
        />
    );
});

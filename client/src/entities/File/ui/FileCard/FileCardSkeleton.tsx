import { FC } from 'react';

import { FileView } from '../../model/types/file';

import cls from './FileCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface FileCardSkeletonProps {
    className?: string;
    view: FileView;
}

export const FileCardSkeleton: FC<FileCardSkeletonProps> = (props) => {
    const { className, view } = props;

    if (view === 'list') {
        return (
            <div className={classNames(cls.FileCard, {}, [className, cls[view]])}>
                <Skeleton variant='rounded' className={cls.icon} width={30} height={30} />
                <Skeleton variant='rounded' width='30%' className={cls.label} height={20} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.FileCard, {}, [className, cls[view]])}>
            <Skeleton className={cls.icon} width={50} height={50} animation='wave' />
            <Skeleton className={cls.label} width={50} height={20} animation='wave' />
        </div>
    );
};

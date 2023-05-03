import {
    FC,
    ReactNode,
    memo,
    HTMLAttributes,
    CSSProperties,
} from 'react';

import cls from './Skeleton.module.scss';

import { Additional, classNames } from '@/shared/lib/classNames/classNames';

type SkeletonType = 'circular' | 'rounded' | 'text' | 'rectangular';
type SkeletonAnimation = 'pulse' | 'wave' | 'disabled';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: SkeletonType;
    width?: number | string;
    height?: number | string;
    children?: ReactNode;
    animation?: SkeletonAnimation;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
    const {
        className,
        variant = 'rectangular',
        width,
        height,
        children,
        animation = 'pulse',
        border,
        ...otherProps
    } = props;

    const additional: Additional = [
        className,
        cls[variant],
        cls[animation],
    ];

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, additional)}
            {...otherProps}
        >
            {children}
        </div>
    );
});

import { FC, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    variant?: UIVariant;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        variant = 'primary',
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, variants[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

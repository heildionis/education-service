import { FC, memo } from 'react';

import { UIVariant } from '../global';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<React.SVGProps<SVGSVGElement>>;
    variant?: UIVariant;
    disabled?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        variant = 'primary',
        disabled,
        ...otherProps
    } = props;

    return (
        <Svg className={classNames('', { [cls.disabled]: disabled }, [className, cls[variant]])} {...otherProps} />
    );
});

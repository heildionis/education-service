import { FC, memo } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type IconVariant = 'primary' | 'secondary' | 'accent' | 'soft';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    variant?: IconVariant
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const { className, Svg, variant = 'primary' } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className, cls[variant]])} />
    );
});

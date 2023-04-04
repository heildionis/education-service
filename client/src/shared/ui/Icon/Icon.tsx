import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

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

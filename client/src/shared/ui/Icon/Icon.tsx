import { FC, memo } from 'react';

import { UIVariant } from '../global';
import variants from '../global.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    variant?: UIVariant;
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const { className, Svg, variant = 'primary' } = props;

    return (
        <Svg className={classNames('', {}, [className, variants[variant]])} />
    );
});

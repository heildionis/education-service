import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Container, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};

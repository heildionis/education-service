import { memo } from 'react';

import cls from './FilePreviewDelete.module.scss';

import { TrashIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';

interface FilePreviewDeleteProps {
    className?: string;
    onClick?: () => void;
}

export const FilePreviewDelete = memo((props: FilePreviewDeleteProps) => {
    const { className, onClick } = props;

    return (
        <Icon
            onClick={onClick}
            className={classNames(cls.FilePreviewDelete, {}, [className])}
            Svg={TrashIcon}
            variant='danger'
            width={16}
            height={16}
        />
    );
});

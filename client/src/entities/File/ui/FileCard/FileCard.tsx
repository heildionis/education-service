import {
    FC,
    HTMLAttributes,
    ReactNode,
} from 'react';

import { FileEntity, FileView } from '../../model/types/file';

import cls from './FileCard.module.scss';

import { FileIcon, FolderIcon } from '@/shared/assets/icons';
import { getRouteFile } from '@/shared/config/routes/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertDate } from '@/shared/lib/converters';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Row } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface FileCardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    file: FileEntity;
    view?: FileView;
    onOpenDir?: (file: FileEntity) => () => void;
    renderOptions?: () => ReactNode;
}

export const FileCard: FC<FileCardProps> = (props: FileCardProps) => {
    const {
        className,
        file,
        view = 'tile',
        renderOptions,
        onOpenDir,
        ...otherProps
    } = props;

    if (view === 'list') {
        return (
            <Card
                className={classNames(cls.FileCard, {}, [className, cls[view]])}
                onClick={onOpenDir?.(file)}
                {...otherProps}
            >
                <AppLink
                    to={getRouteFile(String(file.id))}
                    className={cls.label}
                >
                    <Row gap='8'>
                        <Icon
                            className={cls.icon}
                            Svg={file.type === 'dir' ? FolderIcon : FileIcon}
                            variant='secondary'
                        />
                        <Typography variant='h5'>
                            {file.name}
                        </Typography>
                    </Row>
                </AppLink>
                <Typography align='center' className={cls.size}>
                    {file.type !== 'dir' ? `${file.size}B` : ''}
                </Typography>
                <Typography align='center' className={cls.date}>{`${convertDate(file.createdAt)}`}</Typography>
                {renderOptions?.()}
            </Card>
        );
    }

    return (
        <AppLink to={getRouteFile(String(file.id))}>
            <Card
                className={classNames(cls.FileCard, {}, [className, cls[view]])}
                onClick={onOpenDir?.(file)}
                {...otherProps}
            >
                <Icon
                    className={cls.icon}
                    Svg={file.type === 'dir' ? FolderIcon : FileIcon}
                    variant='secondary'
                />
                <Typography
                    className={cls.label}
                    variant='div'
                >
                    {file.name}
                </Typography>
            </Card>
        </AppLink>
    );
};

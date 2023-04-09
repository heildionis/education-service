import {
    FC,
    HTMLAttributes,
    ReactNode,
} from 'react';
import { FileIcon, FolderIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Typography } from 'shared/ui/Typography/Typography';
import { RippleWrapper } from 'shared/animations/components/RippleEffect';
import { FileEntity, FileView } from '../../model/types/file';
import cls from './FileCard.module.scss';

interface FileCardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    file: FileEntity;
    view?: FileView;
    onOpenDir?: (file: FileEntity) => () => void;
    renderOptions?: () => ReactNode;
}

const convertDate = (dateString: Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

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
                <RippleWrapper>
                    <Icon className={cls.icon} Svg={file.type === 'dir' ? FolderIcon : FileIcon} />
                </RippleWrapper>
                <Typography className={cls.label} variant='h5'>
                    {file.name}
                </Typography>
                <Typography align='center' className={cls.size}>
                    {file.type !== 'dir' ? `${file.size}B` : ''}
                </Typography>
                <Typography align='center' className={cls.date}>{`${convertDate(file.createdAt)}`}</Typography>
                {renderOptions?.()}
            </Card>
        );
    }

    return (
        <Card
            className={classNames(cls.FileCard, {}, [className, cls[view]])}
            onClick={onOpenDir?.(file)}
            {...otherProps}
        >
            <RippleWrapper>
                <Icon className={cls.icon} Svg={file.type === 'dir' ? FolderIcon : FileIcon} />
            </RippleWrapper>
            <Typography className={cls.label} variant='h5'>
                {file.name}
            </Typography>
        </Card>
    );
};

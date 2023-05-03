import { FC, memo } from 'react';

import cls from './FilesController.module.scss';

import { CreateDirForm } from '@/features/CreateDir';
import { FileUpload } from '@/features/FileUpload';
import { BMSTUIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Column, Row } from '@/shared/ui/Stack';

interface SidebarProps {
    className?: string;
    parentId?: number | null;
}

export const FilesController: FC<SidebarProps> = memo((props: SidebarProps) => {
    const { className, parentId } = props;

    return (
        <Card variant='secondary' className={classNames(cls.FileController, {}, [className])}>
            <Row justify='center'>
                <Icon className={cls.icon} Svg={BMSTUIcon} variant='soft' />
            </Row>
            <Column gap='8'>
                <FileUpload parentId={parentId} />
                <CreateDirForm parentId={parentId} />
            </Column>
        </Card>
    );
});

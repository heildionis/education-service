import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { CreateDirForm } from 'features/CreateDir';
import { BMSTUIcon } from 'shared/assets/icons';
import { Icon } from 'shared/ui/Icon/Icon';
import { FileUpload } from 'features/FileUpload';
import { Column, Row } from 'shared/ui/Stack';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    parentId?: number | null
}

export const FilesController: FC<SidebarProps> = memo((props: SidebarProps) => {
    const { className, parentId } = props;

    return (
        <Card className={classNames(cls.FileController, {}, [className])}>
            <Row justify='center'>
                <Icon className={cls.icon} Svg={BMSTUIcon} variant='secondary' />
            </Row>
            <Column gap='8'>
                <FileUpload parentId={parentId} />
                <CreateDirForm parentId={parentId} />
            </Column>
        </Card>
    );
});

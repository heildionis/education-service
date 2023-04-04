import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { CreateDirForm } from 'features/CreateDir';
import { BMSTUIcon } from 'shared/assets/icons';
import { Icon } from 'shared/ui/Icon/Icon';
import { useSelector } from 'react-redux';
import { getFilesPageCurrentDir } from 'pages/FilesPage/model/selectors/filesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createDir } from 'pages/FilesPage/model/services/createDir';
import { fetchFileList } from 'pages/FilesPage/model/services/fetchFileList';
import { FileUpload } from 'features/FileUpload';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const currentDir = useSelector(getFilesPageCurrentDir);

    const onCreateDir = useCallback((name: string) => () => {
        dispatch(createDir({
            name,
            parentId: (currentDir !== null && currentDir) ? currentDir : undefined,
        }));
        setTimeout(() => {
            dispatch(fetchFileList({ parentId: currentDir }));
        }, 300);
    }, [dispatch, currentDir]);

    return (
        <Card className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.logoWrapper}>
                <Icon className={cls.icon} Svg={BMSTUIcon} variant='secondary' />
            </div>
            <div className={cls.bottom}>
                <FileUpload currentDir={currentDir} />
                <CreateDirForm onCreateDir={onCreateDir} />
            </div>
        </Card>
    );
});

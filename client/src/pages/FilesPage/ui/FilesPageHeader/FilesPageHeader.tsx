import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { FileViewSelector } from 'features/FileViewSelector';
import { Divider } from 'shared/ui/Divider/Divider';
import { getFilesPageCurrentDir, getFilesPageDirStack } from '../../model/selectors/filesPageSelectors';
import { filesPageActions } from '../../model/slice/filesPageSlice';
import cls from './FilesPageHeader.module.scss';

interface FilesPageHeaderProps {
    className?: string;
}

export const FilesPageHeader: FC<FilesPageHeaderProps> = memo((props: FilesPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const dirStack = useSelector(getFilesPageDirStack);
    const currentDir = useSelector(getFilesPageCurrentDir);

    const onBackClick = useCallback(() => {
        const nullStack = dirStack.filter((stackItem) => stackItem === null);
        const isRootFolder = nullStack.length === dirStack.length;
        if (isRootFolder) {
            dispatch(filesPageActions.setCurrentDir(null));
            return;
        }
        dispatch(filesPageActions.popFromStack());
    }, [dispatch, dirStack]);

    return (
        <div className={classNames(cls.FilesPageHeader, {}, [className])}>
            <Typography
                variant='h2'
                color='secondary'
                align='center'
            >
                Файлы
            </Typography>
            <div className={cls.tools}>
                <FileViewSelector />
                {currentDir !== null && <Button className={cls.backBtn} onClick={onBackClick}>Back</Button>}
            </div>
        </div>
    );
});

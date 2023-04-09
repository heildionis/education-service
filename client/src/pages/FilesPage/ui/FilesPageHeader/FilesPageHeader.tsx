import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { FileViewSelector } from 'features/FileViewSelector';
import { Row } from 'shared/ui/Stack';
import { getFilesPageCurrentDir, getFilesPageDirStack } from '../../model/selectors/filesPageSelectors';
import { filesPageActions } from '../../model/slice/filesPageSlice';

export const FilesPageHeader = memo(() => {
    const { t } = useTranslation('file');
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
        <div>
            <Typography
                variant='h2'
                color='secondary'
                align='center'
            >
                {t('Файлы')}
            </Typography>
            <Row justify='between'>
                <FileViewSelector />
                {currentDir !== null && (
                    <Button onClick={onBackClick}>
                        {t('Назад')}
                    </Button>
                )}
            </Row>
        </div>
    );
});

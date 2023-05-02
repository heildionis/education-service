import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FileViewSelector } from '@/features/FileViewSelector';
import { RoutePath } from '@/shared/config/routes/routes';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button } from '@/shared/ui/Button/Button';
import { Row } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface FilesTableHeaderProps {
    parentId?: number | null;
    currentDir?: number | null;
    onBackClick?: (parentId?: number | null) => () => void;
}

export const FilesTableHeader = memo((props: FilesTableHeaderProps) => {
    const { parentId, currentDir, onBackClick } = props;
    const { t } = useTranslation('file');

    return (
        <>
            <Typography
                variant='h2'
                color='secondary'
                align='center'
            >
                {t('Файлы')}
            </Typography>
            <Row justify='between' fullWidth>
                <FileViewSelector />
                {currentDir !== null
                && (
                    <AppLink
                        to={RoutePath.files + parentId}
                        onClick={onBackClick?.(parentId)}
                    >
                        <Button>
                            {t('Назад')}
                        </Button>
                    </AppLink>
                )}
            </Row>
        </>
    );
});

import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Typography } from '@/shared/ui/Typography/Typography';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = memo((props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation('error');

    const onReloadClick = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Typography variant='h1'>{t('Непредвиденная ошибка')}</Typography>
            <Button onClick={onReloadClick}>{t('Обновить страницу')}</Button>
        </div>
    );
});

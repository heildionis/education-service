import { Menu } from '@headlessui/react';
import {
    FC,
    memo,
    MouseEvent,
    useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import cls from './FileOptions.module.scss';

import { GarbageIcon, MenuIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Typography } from '@/shared/ui/Typography/Typography';

interface FileOptionsProps {
    className?: string;
    isDir?: boolean;
    onDeleteClick?: () => void;
    onDownloadClick?: () => void;
}

export const FileOptions: FC<FileOptionsProps> = memo((props: FileOptionsProps) => {
    const {
        className,
        onDeleteClick,
        onDownloadClick,
        isDir,
    } = props;
    const { t } = useTranslation();

    const onOpenClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    return (
        <div className={classNames(cls.FileOptions, {}, [className])} onClick={onOpenClick}>
            <Menu>
                <Menu.Button className={cls.btn}><Icon variant='secondary' Svg={MenuIcon} /></Menu.Button>
                <Menu.Items className={cls.items}>
                    <Card className={cls.card} variant='secondary'>
                        <Typography variant='h5' color='soft'>{t('Меню')}</Typography>
                        <Menu.Item>
                            <Button
                                className={cls.deleteBtn}
                                variant='outlined'
                                fullWidth
                                onClick={onDeleteClick}
                                isAnimated={false}
                            >
                                {t('Удалить')}
                                <Icon Svg={GarbageIcon} variant='secondary' />
                            </Button>
                        </Menu.Item>
                        {!isDir && (
                            <Menu.Item>
                                <Button
                                    className={cls.deleteBtn}
                                    variant='outlined'
                                    fullWidth
                                    onClick={onDownloadClick}
                                    isAnimated={false}
                                >
                                    {t('Скачать')}
                                    <Icon Svg={GarbageIcon} variant='secondary' />
                                </Button>
                            </Menu.Item>
                        )}
                    </Card>
                </Menu.Items>
            </Menu>
        </div>
    );
});

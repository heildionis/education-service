import { FC, memo, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { GarbageIcon, MenuIcon } from 'shared/assets/icons';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './FileOptions.module.scss';

interface FileOptionsProps {
    className?: string;
    isDir?: boolean;
    onDeleteClick?: () => void;
    onDownloadClick?: () => void;
}

export const FileOptions: FC<FileOptionsProps> = memo((props: FileOptionsProps) => {
    const {
        className, onDeleteClick, onDownloadClick, isDir,
    } = props;
    const { t } = useTranslation();

    const onOpenClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.FileOptions, {}, [className])} onClick={onOpenClick}>
            <Menu>
                <Menu.Button className={cls.btn}><Icon Svg={MenuIcon} /></Menu.Button>
                <Menu.Items className={cls.items}>
                    <Card className={cls.card}>
                        <Typography color='inverted'>{t('Меню')}</Typography>
                        <Menu.Item>
                            <Button
                                className={cls.deleteBtn}
                                variant='outlined'
                                fullWidth
                                onClick={onDeleteClick}
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

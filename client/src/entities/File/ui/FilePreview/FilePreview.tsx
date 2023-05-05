import { FC, ReactNode, memo } from 'react';

import { FileProgress } from '../FileProgress/FileProgress';

import cls from './FilePreview.module.scss';

import { PaperClipIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Column, Row } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface FilePreviewProps {
    className?: string;
    progress: number;
    children: ReactNode;
    renderOptions?: () => ReactNode;
}

export const FilePreview: FC<FilePreviewProps> = memo((props: FilePreviewProps) => {
    const {
        className,
        progress,
        children,
        renderOptions,
    } = props;

    return (
        <Card className={classNames(cls.FilePreview, {}, [className])}>
            <Row gap='8' align='center' fullWidth>
                <Icon
                    width={16}
                    height={16}
                    Svg={PaperClipIcon}
                    variant='secondary'
                />
                <Column gap='2' align='start' className={cls.progress}>
                    <Typography
                        noWrap
                        variant='h5'
                        className={cls.label}
                        component='p'
                    >
                        {children}
                    </Typography>
                    <FileProgress progress={progress} max='100' />
                </Column>
                {renderOptions?.()}
            </Row>
        </Card>
    );
});

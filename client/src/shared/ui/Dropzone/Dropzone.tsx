import {
    FC,
    memo,
    useCallback,
    useRef,
    useState,
    ChangeEvent,
    MouseEvent,
} from 'react';
import {
    FileDropItem,
    useDrop,
    useFocusWithin,
} from 'react-aria';

import { Button } from '../Button/Button';
import { Card } from '../Card';
import { Icon } from '../Icon/Icon';
import { Column } from '../Stack';
import { Typography } from '../Typography/Typography';

import cls from './Dropzone.module.scss';

import { UploadIcon } from '@/shared/assets/icons';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

interface DropzoneProps {
    className?: string;
    title?: string;
    label?: string;
    multiple?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    maxSize?: number;
    maxFiles?: number;
    accept?: string;
    onDrop?: (files: File[]) => void;
    onUpload?: (files: File[]) => void;
    fullWidth?: boolean;
}

export const Dropzone: FC<DropzoneProps> = memo((props: DropzoneProps) => {
    const {
        className,
        title,
        label,
        multiple = true,
        readOnly = false,
        maxSize = 30 * 1024 ** 2,
        maxFiles = 10,
        autoFocus,
        accept = '*',
        onDrop,
        onUpload,
        fullWidth,
    } = props;
    const ref = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(autoFocus);
    const [hasError, setHasError] = useState(false);

    const bindHandler = useCallback((files: File[]) => {
        onDrop?.(files);
        onUpload?.(files);
    }, [onDrop, onUpload]);

    const { dropProps, isDropTarget } = useDrop({
        ref,
        onDrop: async (e) => {
            if (readOnly) {
                return;
            }

            setHasError(false);

            const files = await Promise.all((() => {
                const itemsKindOfFile = e.items.filter((item) => item.kind === 'file') as FileDropItem[];
                const filesFromItems = itemsKindOfFile.map((item) => item.getFile());

                return filesFromItems;
            })());

            if (files.length > maxFiles) {
                setHasError(true);
                return;
            }

            bindHandler(files);
        },
    });

    const { focusWithinProps } = useFocusWithin({
        onFocusWithin: () => {
            setIsFocused(true);
        },
        onBlurWithin: () => {
            setIsFocused(false);
        },
    });

    const onInputClick = useCallback((e: MouseEvent) => {
        if (readOnly) {
            return;
        }

        e.stopPropagation();
        inputRef.current?.click();
    }, [readOnly]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const files = Object.entries(e.target.files).map(([, file]) => file);

            if (files.length > maxFiles) {
                setHasError(true);
                return;
            }

            bindHandler(files);
        }
    };

    const mods: Mods = {
        [cls.drop]: isDropTarget,
        [cls.focus]: isFocused,
        [cls.readOnly]: readOnly,
    };

    return (
        <Card
            ref={ref}
            className={classNames(cls.Dropzone, mods, [className])}
            {...dropProps}
            {...focusWithinProps}
            onClick={onInputClick}
            fullWidth={fullWidth}
        >
            <Column
                gap='8'
            >
                <Column gap='4'>
                    <Icon
                        width={64}
                        height={64}
                        Svg={UploadIcon}
                        variant={(isDropTarget && !readOnly) ? 'secondary' : 'primary'}
                        disabled={readOnly}
                    />
                    <Typography
                        variant='h5'
                        component='h4'
                        color={(isDropTarget && !readOnly) ? 'secondary' : 'primary'}
                        disabled={readOnly}
                    >
                        {title}
                    </Typography>
                </Column>
                <Button
                    disabled={isDropTarget || readOnly}
                    onClick={onInputClick}
                >
                    {label}
                </Button>
                {hasError && (
                    <>
                        Нельзя отправить более чем
                        {' '}
                        {maxFiles}
                        {' '}
                        файлов за раз!
                    </>
                )}
                <input
                    className={cls.input}
                    type='file'
                    ref={inputRef}
                    multiple={multiple}
                    accept={accept}
                    readOnly={readOnly}
                    onChange={onChange}
                />
            </Column>
        </Card>
    );
});

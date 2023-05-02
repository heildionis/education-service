import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getFileView } from '../../model/selectors/getFileView';
import { fileViewActions, fileViewReducer } from '../../model/slice/fileViewSlice';

import { FileView } from '@/entities/File';
import { ListIcon, TileIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Row } from '@/shared/ui/Stack';

interface FileViewSelectorProps {
    className?: string;
}

interface FileViewSelector {
    view: FileView;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const fileViews: FileViewSelector[] = [
    {
        view: 'tile',
        icon: TileIcon,
    },
    {
        view: 'list',
        icon: ListIcon,
    },
];

const reducers: ReducerList = {
    fileView: fileViewReducer,
};

export const FileViewSelector: FC<FileViewSelectorProps> = memo((props: FileViewSelectorProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getFileView);

    useInitialEffect(() => {
        dispatch(fileViewActions.initView());
    });

    const onViewClick = useCallback((view: FileView) => () => {
        dispatch(fileViewActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Row className={classNames('', {}, [className])}>
                {fileViews.map((fileView) => (
                    <Button
                        key={fileView.view}
                        variant='clear'
                        isAnimated={false}
                        onClick={onViewClick(fileView.view)}
                    >
                        <Icon
                            Svg={fileView.icon}
                            variant={fileView.view === view ? 'accent' : 'soft'}
                        />
                    </Button>
                ))}
            </Row>
        </DynamicModuleLoader>
    );
});

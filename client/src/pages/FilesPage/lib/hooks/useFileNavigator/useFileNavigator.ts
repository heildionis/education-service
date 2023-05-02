import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getFilesPageCurrentDir, getFilesPageDirStack } from '../../../model/selectors/filesPageSelectors';
import { filesPageActions } from '../../../model/slice/filesPageSlice';

import { FileEntity } from '@/entities/File';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { isDigit } from '@/shared/lib/isDigit/isDigit';

interface UseFileNavigatorResult {
    onOpen: (file: FileEntity) => () => void;
    onBack: (parentId?: number | null) => () => void;
}

export const useFileNavigator = (id?: string): UseFileNavigatorResult => {
    const dispatch = useAppDispatch();
    const currentDir = useSelector(getFilesPageCurrentDir);
    const dirStack = useSelector(getFilesPageDirStack);

    useEffect(() => {
        if (id && isDigit(id)) {
            dispatch(filesPageActions.setCurrentDir(Number(id)));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onOpen = useCallback((file: FileEntity) => () => {
        const isFolder = file.type === 'dir' && (currentDir !== undefined);
        if (isFolder) {
            dispatch(filesPageActions.pushToStack(currentDir));
            dispatch(filesPageActions.setCurrentDir(file.id));
        }
    }, [dispatch, currentDir]);

    const onBack = useCallback((parentId?: number | null) => () => {
        const stackOfNulls = dirStack.filter((stackItem) => stackItem === null);
        const isInitialStack = dirStack.length === 0 && parentId !== null;

        const isRootFolder = stackOfNulls.length === dirStack.length && !isInitialStack;

        if (isRootFolder) {
            dispatch(filesPageActions.setCurrentDir(null));
            return;
        }

        if (isInitialStack && parentId) {
            dispatch(filesPageActions.setCurrentDir(parentId));
            return;
        }

        dispatch(filesPageActions.popFromStack());
    }, [dispatch, dirStack]);

    const navigators = useMemo(() => ({
        onBack,
        onOpen,
    }), [onBack, onOpen]);

    return navigators;
};

import { registrationActions } from 'features/Registration/model/slice/registrationSlice';
import { FC, Suspense } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { RegistrationFormAsync } from '../RegistrationForm/RegistrationForm.async';

interface RegistrationModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const RegistrationModal: FC<RegistrationModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    const dispatch = useAppDispatch();

    if (!isOpen) {
        dispatch(registrationActions.setUsername(''));
        dispatch(registrationActions.setPassword(''));
    }

    return (
        <Modal
            className={className}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <RegistrationFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

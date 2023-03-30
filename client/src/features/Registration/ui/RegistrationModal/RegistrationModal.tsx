import { FC, Suspense } from 'react';
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

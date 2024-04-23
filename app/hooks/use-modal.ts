
import { useState } from 'react';
import { ModalContentProps } from '../components/modal';

interface UseModalState {
    modal: boolean;
    modalContent: ModalContentProps;
}

interface UseModalReturn {
    modal: boolean;
    handleModal: (content?: ModalContentProps) => void;
    modalContent: ModalContentProps;
}

export const useModal = (): UseModalReturn => {
    const [state, setState] = useState<UseModalState>({
        modal: false,
        modalContent: { children: null },
    });

    const handleModal = (content?: ModalContentProps) => {
        setState((prevState) => ({
            modal: !prevState.modal,
            modalContent: content !== undefined ? content : prevState.modalContent,
        }));
    };

    return {
        modal: state.modal,
        handleModal,
        modalContent: state.modalContent,
    };
};


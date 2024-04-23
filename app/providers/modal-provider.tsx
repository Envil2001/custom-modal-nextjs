"use client";

import { ReactNode, createContext, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useModal, usePortal } from "../hooks";
import { Modal } from "../components";
import { ModalContentProps } from "../components/modal";



export interface ModalContextType {
  handleModal: (content?: ModalContentProps) => void;
  modalContent: ModalContentProps;
  modal: boolean;
}

const ModalContext = createContext<ModalContextType>({
  handleModal: () => { },
  modalContent: { children: null },
  modal: false,
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { modal, handleModal, modalContent } = useModal();

  const portal = usePortal({
    children: (
      <TransitionGroup>
        {modal && modalContent && (
          <CSSTransition
            key="modal"
            timeout={200}
            classNames="modal__animation"
          >
            <Modal {...modalContent}>{modalContent.children}</Modal>
          </CSSTransition>
        )}
      </TransitionGroup>
    ),
    wrapperId: "modal-root",
  });

  return (
    <ModalContext.Provider value={{ handleModal, modalContent, modal }}>
      {children}
      {portal}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalProvider };

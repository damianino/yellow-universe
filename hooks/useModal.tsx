import Modal from "@/components/Modal";
import { ReactNode, useCallback, useEffect, useState } from "react";
import * as child_process from "child_process";
import { CSSProperties } from "styled-components";

type Res = {
  modal: ReactNode;
  openModal: (
    children: ReactNode,
    onClose?: () => void,
    containerStyle?: CSSProperties
  ) => void;
};
export const useModal = (): Res => {
  const [onClose, setOnClose] = useState<Function>(() => {});
  const [containerStyle, setContainerStyle] = useState<CSSProperties>({});
  const [isOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState<ReactNode>(null);

  const [modal, setModal] = useState<ReactNode>(null);

  const openModal = useCallback(
    (
      children: ReactNode,
      onClose?: () => void,
      containerStyle?: CSSProperties
    ) => {
      onClose && setOnClose(onClose);
      containerStyle && setContainerStyle(containerStyle);

      setChildren(children);
      setIsOpen(true);
    },
    []
  );

  useEffect(() => {
    setModal(
      <Modal
        isOpen={isOpen}
        onClose={() => {
          // onClose()
          setChildren(null);
          setIsOpen(false);
        }}
        containerStyle={containerStyle}
      >
        {children}
      </Modal>
    );
  }, [children, isOpen, onClose, containerStyle]);

  return {
    modal,
    openModal,
  };
};

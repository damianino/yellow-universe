import { CSSProperties } from "styled-components";
import { Container, Overlay, Content, CloseModalBtn } from "./styled";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;

  isOpen: boolean;
  onClose: () => void;
  overlayStyle?: CSSProperties | undefined;
  containerStyle?: CSSProperties | undefined;
};

const Modal = ({
  children,
  isOpen,
  onClose,
  overlayStyle,
  containerStyle,
}: Props) => {
  overlayStyle = {
    ...overlayStyle,
    display: isOpen ? "block" : "none",
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay style={overlayStyle} onClick={handleOverlayClick}>
      <Container style={containerStyle} onClick={(e) => e.stopPropagation()}>
        <CloseModalBtn src="close-btn.png" onClick={onClose} />
        <Content>{children}</Content>
      </Container>
    </Overlay>
  );
};

export default Modal;

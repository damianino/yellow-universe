import Slider from "../Modal/Slider";
import {
  BuyButton,
  CloseButton,
  Description,
  Modal,
  Overlay,
  Title,
} from "./styled";

export const InfoModal = ({
  isOpen,
  onClose,
  onBuy,
}: {
  isOpen: boolean;
  onClose: () => void;
  onBuy: () => void;
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal onClick={handleModalClick}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Chromnesia Box Set</Title>

        <Slider box>
          <img width={300} src="/box.jpg" alt="Slide 1" />
          <img width={300} src="/box.jpg" alt="Slide 2" />
          <img width={300} src="/box.jpg" alt="Slide 3" />
        </Slider>

        {/* <Description>Описание</Description> */}
        <BuyButton src="boxbutton.png" onClick={onBuy}></BuyButton>
      </Modal>
    </Overlay>
  );
};

import Slider from "../Modal/Slider";
import { CloseModalBtn } from "../Modal/styled";
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
        {/* <CloseButton onClick={onClose}>×</CloseButton> */}
        <CloseModalBtn src="close-btn.png" onClick={onClose} />
        {/* <Title>Chromnesia Box Set</Title> */}

        <Slider box>
          <img width={300} src="/box/9.jpg" alt="Slide 1" />
          <img width={300} src="/box/1.jpg" alt="Slide 2" />
          <img width={300} src="/box/2.jpg" alt="Slide 3" />
          <img width={300} src="/box/3.jpg" alt="Slide 3" />
          <img width={300} src="/box/4.jpg" alt="Slide 3" />
          <img width={300} src="/box/5.jpg" alt="Slide 3" />
          <img width={300} src="/box/6.jpg" alt="Slide 3" />
          <img width={300} src="/box/7.jpg" alt="Slide 3" />
          <img width={300} src="/box/8.jpg" alt="Slide 3" />
        </Slider>

        {/* <Description>Описание</Description> */}
        <BuyButton src="boxbutton.png" onClick={onBuy}></BuyButton>
      </Modal>
    </Overlay>
  );
};

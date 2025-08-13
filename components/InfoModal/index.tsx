import { useEffect, useState } from "react";
import { Selector } from "../Cart/styled";
import Slider from "../Modal/Slider";
import { CloseModalBtn } from "../Modal/styled";
import {
  Box,
  BuyButton,
  CloseButton,
  Description,
  Modal,
  Overlay,
  Text,
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

  const [size, setSize] = useState("M");

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    localStorage.setItem("size", e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("size", size);
  }, []);

  console.log("size", size);

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal onClick={handleModalClick}>
        <CloseModalBtn src="close-btn.png" onClick={onClose} />
        <Box>
          <Slider box>
            <img width={300} src="/box/9.jpg" alt="Slide 1" />
            <img width={300} src="/box/1.jpg" alt="Slide 2" />
            <img width={300} src="/box/4.jpg" alt="Slide 3" />
            <img width={300} src="/box/5.jpg" alt="Slide 4" />
            <img width={300} src="/box/8.jpg" alt="Slide 5" />
            <img width={300} src="/box/6.jpg" alt="Slide 6" />
            <img width={300} src="/box/7.jpg" alt="Slide 7" />
            <img width={300} src="/box/2.jpg" alt="Slide 8" />
          </Slider>

          <Description>
            <div style={{ marginBottom: "5px" }}>
              <span>Original CHROMNESIA Bundle includes:</span>
            </div>
            <div>
              1.<span> «Chromnesia Backstage»</span> oversized heavy cotton
              t-shirt
            </div>
            <div>
              2. <span>«Good Night Chrome»</span> sleeping mask
            </div>
            <div>
              3. <span>«Sad Wanderer»</span> letter jar
            </div>
            <div>
              <span>«Chrome Yellow»</span> makeup set (sponge + face paint)
            </div>
            <div>
              5. Random<span> «Chromnesia»</span> А2 poster{" "}
            </div>
            <Text>
              All items come packed in a matte black cardboard box, hand-signed
              by the director. <span>All sales are final.</span>
            </Text>
            <div>
              Size
              <Selector value={size} onChange={handleSizeChange}>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Selector>
            </div>
          </Description>
        </Box>
        <BuyButton src="boxbutton.png" onClick={onBuy}></BuyButton>
      </Modal>
    </Overlay>
  );
};

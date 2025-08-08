import { Container, Button } from "./styled";
import {
  useCart,
  useModalBoxStore,
  useModalStore,
} from "@/app/store/cartStore";

const ArtifactCard = ({ onOpenModal }: any) => {
  const openInfoModal = useModalBoxStore((state) => state.openInfoModal);

  const handleOpenInfo = () => {
    openInfoModal();
  };

  const addToCart = useCart((state) => state.addToCart);
  const openCartModal = useModalStore((state) => state.openModal);

  const handleBuy = () => {
    addToCart();
    openCartModal();
  };

  return (
    <Container>
      <img src="box.jpg" alt="Chromnesia Box Set" />
      <Button onClick={onOpenModal}>
        <img src="boxbutton.png" alt="Chromnesia Box Set" className="default" />
        <img
          className="hover"
          src="boxbuttonhover.png"
          alt="Buy Button Hover"
        />
      </Button>
    </Container>
  );
};

export default ArtifactCard;

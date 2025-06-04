import { Container, Button } from "./styled";
import { useCart, useModalStore } from "@/app/store/cartStore";

const ArtifactCard = () => {
  const addToCart = useCart((state) => state.addToCart);
  const openModal = useModalStore((state) => state.openModal);

  const handleBuy = () => {
    addToCart();
    openModal();
  };

  return (
    <Container>
      <img src="img_1.png" alt="Chromnesia Box Set" />
      <Button onClick={handleBuy}>BUY NOW</Button>
    </Container>
  );
};

export default ArtifactCard;

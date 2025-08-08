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
      <img src="box.jpg" alt="Chromnesia Box Set" />
      <Button onClick={handleBuy}>
        <img
          src="boxbutton.png"
          alt="Chromnesia Box Set"
          // style={{ zIndex: "2" }}
          className="default"
        />
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

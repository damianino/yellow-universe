"use client";

import {
  BackgroundImage,
  BackgroundInput,
  BackgroundSmallInput,
  ButtonWrapper,
  Container,
  Delivery,
  Info,
  InputWrapper,
  Line,
  ModalContainer,
  OrderButton,
  RadioContainer,
  Ship,
  StyledInput,
  Sum,
  TgText,
  Title,
  Total,
} from "@/components/Cart/styled";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useCart, useModalStore } from "@/app/store/cartStore";

import {
  ContainerItem,
  Count,
  Price,
  SubTitle,
  Tap,
  Text,
  TitleItem,
} from "../CartItem/styled";

const initialFormState = {
  name: "",
  fullName: "",
  email: "",
  phone: "",
  tgUsername: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
  comment: "",
  quantity: "",
  // delivery: "russian_post",
};

export const Cart = () => {
  const { isOpen, closeModal } = useModalStore();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    fullName: "",
    email: "",
    phone: "",
    tgUsername: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    comment: "",
    quantity: "",
    // delivery: "russian_post",
  });

  const quantity = useCart((state) => state.quantity);
  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  const clearCart = useCart((state) => state.clearCart);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const raw = JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        tgUsername: form.tgUsername,
        fullName: form.fullName,
        country: form.country,
        city: form.city,
        address: form.address,
        postalCode: form.postalCode,
        comment: form.comment || "",
        quantity: quantity,
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://d5db2c6pt6nvm2hh7uk3.cmxivbes.apigw.yandexcloud.net/newOrder",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log("Yandex Cloud Response:", result))
        .catch((error) => console.error("Yandex Cloud Error:", error));

      setSubmitted(true);
      clearCart();
      setForm(initialFormState);
      closeModal();
    } catch (err) {
      alert("Ошибка при отправке заказа");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setForm(initialFormState);
      setSubmitted(false);
    }
  }, [isOpen]);

  return (
    <>
      <Container
        isOpen={isOpen}
        onClick={() => useModalStore.getState().openModal()}
      >
        <img   src={"/cart.svg"} width={40} height={40} alt="cart" />
      </Container>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContainer>
          <BackgroundImage
            src="/cart/frame.png"
            alt="custom input"
            width={590}
            height={1085}
          />
          <Title>Ваш заказ</Title>
          <ContainerItem>
            <Text>
              <TitleItem href="/aroma">товар</TitleItem>
              <SubTitle>Мистери бокс</SubTitle>
            </Text>
            <Count>
              <Tap onClick={decrement}>−</Tap>
              <span>{quantity}</span>
              <Tap onClick={increment}>+</Tap>
            </Count>
            <Price>600 руб</Price>
            <Line>
              <img  
                src={"/cart/line-1.png"}
                width={532}
                height={60}
                alt="cart"
              />
            </Line>
          </ContainerItem>

          <Sum>Subtotal: {quantity * 600}</Sum>

          <InputWrapper>
            <BackgroundInput
              src="/cart/input-1.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Имя"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <BackgroundInput
              src="/cart/input-2.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
            />
          </InputWrapper>
          <InputWrapper>
            <BackgroundInput
              src="/cart/input-3.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Телефон"
            />
          </InputWrapper>
          <InputWrapper>
            <BackgroundInput
              src="/cart/input-4.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.tgUsername}
              onChange={(e) => handleChange("tgUsername", e.target.value)}
              placeholder="Telegram"
            />
          </InputWrapper>
          <TgText>
            Если Вам нельзя отправить сообщение в телеграмме, напишите{" "}
            <a target="_blank" href="https://t.me/shterntm">
              сюда
            </a>
            , чтобы узнать детали оплаты
          </TgText>

          <Delivery>Delivery</Delivery>
          <InputWrapper>
            <BackgroundInput
              src="/cart/input-5.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Полное имя"
            />
          </InputWrapper>
          {/* <RadioContainer>
            <label>
              <input
                type="radio"
                name="delivery"
                value="russian_post"
                // checked={form.delivery === "russian_post"}
                onChange={() => handleChange("delivery", "russian_post")}
              />
              Почта России
            </label>
            <label>
              <input
                type="radio"
                name="delivery"
                value="cdek"
                // checked={form.delivery === "cdek"}
                onChange={() => handleChange("delivery", "cdek")}
              />
              СДЭК
            </label>
          </RadioContainer> */}
          <Ship>
            <InputWrapper>
              <BackgroundSmallInput
                src="/cart/input-6.png"
                alt="custom input"
                width={260}
                height={65}
              />
              <StyledInput
                placeholder="Страна"
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <BackgroundSmallInput
                src="/cart/input-7.png"
                alt="custom input"
                width={260}
                height={65}
              />
              <StyledInput
                placeholder="Город"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </InputWrapper>
          </Ship>

          <Ship>
            <InputWrapper>
              <BackgroundSmallInput
                src="/cart/input-8.png"
                alt="custom input"
                width={260}
                height={65}
              />
              <StyledInput
                placeholder="Адрес"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <BackgroundSmallInput
                src="/cart/input-9.png"
                alt="custom input"
                width={260}
                height={65}
              />
              <StyledInput
                placeholder="Индекс"
                value={form.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
              />
            </InputWrapper>
          </Ship>

          <InputWrapper>
            <BackgroundInput
              src="/cart/input-5.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.comment}
              onChange={(e) => handleChange("comment", e.target.value)}
              placeholder="Комментарий"
            />
          </InputWrapper>

          <Total>Total: {quantity * 600}</Total>
          <ButtonWrapper>
            <BackgroundInput
              src="/cart/button.png"
              alt="custom input"
              width={530}
              height={80}
            />
            <OrderButton onClick={handleSubmit}>оформить заказ</OrderButton>
          </ButtonWrapper>
        </ModalContainer>
      </Modal>
    </>
  );
};

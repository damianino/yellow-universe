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
  Title,
  Total,
} from "@/components/Cart/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useCart, useModalStore } from "@/app/store/cartStore";
import axios from "axios";
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
  full_name: "",
  email: "",
  phone: "",
  telegram: "",
  country: "",
  city: "",
  address: "",
  index: "",
  comment: "",
  delivery: "russian_post",
};

export const Cart = () => {
  const { isOpen, closeModal } = useModalStore();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    full_name: "",
    email: "",
    phone: "",
    telegram: "",
    country: "",
    city: "",
    address: "",
    index: "",
    comment: "",
    delivery: "russian_post",
  });

  const quantity = useCart((state) => state.quantity);
  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  const clearCart = useCart((state) => state.clearCart);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      product: "Chromnesia Box Set",
      quantity,
      ...form,
    };
    try {
      await axios.post("/api/order", payload);
      setSubmitted(true);
      clearCart();
      setForm(initialFormState);
    } catch (err) {
      alert("Ошибка при отправке заказа");
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
        <img src={"/cart.svg"} width={40} height={40} alt="cart" />
      </Container>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContainer>
          <BackgroundImage
            src="/cart/frame.png"
            alt="custom input"
            width={590}
            height={1105}
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
              value={form.telegram}
              onChange={(e) => handleChange("telegram", e.target.value)}
              placeholder="Telegram"
            />
          </InputWrapper>

          <Delivery>Delivery</Delivery>
          <InputWrapper>
            <BackgroundInput
              src="/cart/input-5.png"
              alt="custom input"
              width={530}
              height={65}
            />
            <StyledInput
              value={form.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
              placeholder="Полное имя"
            />
          </InputWrapper>
          <RadioContainer>
            <label>
              <input
                type="radio"
                name="delivery"
                value="russian_post"
                checked={form.delivery === "russian_post"}
                onChange={() => handleChange("delivery", "russian_post")}
              />
              Почта России
            </label>
            <label>
              <input
                type="radio"
                name="delivery"
                value="cdek"
                checked={form.delivery === "cdek"}
                onChange={() => handleChange("delivery", "cdek")}
              />
              СДЭК
            </label>
          </RadioContainer>
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
                value={form.index}
                onChange={(e) => handleChange("index", e.target.value)}
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

          <Total>Total: {quantity * 600 + 500}</Total>
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

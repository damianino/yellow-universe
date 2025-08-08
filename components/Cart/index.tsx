"use client";

import {
  BackgroundImage,
  BackgroundInput,
  BackgroundSmallInput,
  ButtonWrapper,
  Container,
  Delivery,
  InputWrapper,
  Line,
  ModalContainer,
  OrderButton,
  Ship,
  StyledInput,
  SuccessInput,
  Sum,
  TgText,
  Title,
  Total,
} from "@/components/Cart/styled";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useCart, useModalStore } from "@/app/store/cartStore";

import {
  BoxImg,
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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

      const response = await fetch(
        "https://d5db2c6pt6nvm2hh7uk3.cmxivbes.apigw.yandexcloud.net/newOrder",
        requestOptions
      );

      if (!response.ok) throw new Error("Ошибка сети");

      setSubmitted(true);
      clearCart();
      setForm(initialFormState);
      closeModal();
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowError(true);
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
            height={1085}
          />
          <Title>Ваш заказ</Title>
          <ContainerItem>
            <BoxImg src="box.jpg"></BoxImg>
            <Text>
              <TitleItem>товар</TitleItem>
              <SubTitle>mystery box</SubTitle>
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
      {showSuccess && (
        <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)}>
          <ModalContainer>
            <SuccessInput
              src="/cart/input-5.png"
              alt="custom input"
              width={590}
              height={65}
            />
            <h5>Заказ успешно отправлен. Скоро с вами свяжутся!</h5>
            <button onClick={() => setShowSuccess(false)}></button>
          </ModalContainer>
        </Modal>
      )}

      {showError && (
        <Modal isOpen={showError} onClose={() => setShowError(false)}>
          <ModalContainer>
            <SuccessInput
              src="/cart/input-5.png"
              alt="custom input"
              width={590}
              height={65}
            />
            <h5>Что-то пошло не так, попробуйте еще раз</h5>
            <button onClick={() => setShowError(false)}></button>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

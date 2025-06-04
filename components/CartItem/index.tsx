"use client";

import {
  ContainerItem,
  Count,
  Delete,
  ImageContainer,
  Price,
  SubTitle,
  Text,
  TitleItem,
} from "@/components/CartItem/styled";
import Image from "next/image";

type CartItemProps = {
  item: string;
  subtitle: string;
  price: number;
};

export const CartItem = ({ item, subtitle, price }: CartItemProps) => {
  return (
    <ContainerItem>
      <ImageContainer>
        <img loading="lazy"  src={"/img_1.png"} width={40} height={40} alt="cart" />
      </ImageContainer>
      <Text>
        <TitleItem href="/aroma">{item}</TitleItem>
        <SubTitle>{subtitle}</SubTitle>
      </Text>
      <Count></Count>
      <Price>{price} руб</Price>
      <Delete>
        <img loading="lazy"  src={"/circle-remove.svg"} width={25} height={25} alt="cart" />
      </Delete>
    </ContainerItem>
  );
};

import * as S from "./card.styled";
import React from "react";
import Image from "next/image";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <S.Card>
      <Image src={icon} alt={title} width={80} height={80} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

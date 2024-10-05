import Image from "next/image";
import * as S from "./card.styled";
import aspas from "@/assets/icon/aspas.svg";
import profile from "@/assets/images/profile.png";

export interface CardProps {
  message: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ message, name }) => {
  return (
    <S.CardWrapper>
      <S.DescriptionWrapper>
        <Image src={aspas} alt="aspas" />
        <S.Description>{message}</S.Description>
      </S.DescriptionWrapper>
      <S.ProfileWrapper>
        <Image src={profile} alt="profile" />
        <S.NameProfile>{name}</S.NameProfile>
      </S.ProfileWrapper>
    </S.CardWrapper>
  );
};

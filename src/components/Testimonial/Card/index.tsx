import Image from "next/image";
import * as S from "./card.styled";
import aspas from "@/assets/icon/aspas.svg";
import defaultProfile from "@/assets/images/default.png";

export interface CardProps {
  message: string;
  name: string;
  profile: string;
}

export const Card: React.FC<CardProps> = ({ message, name, profile }) => {
  return (
    <S.CardWrapper>
      <S.DescriptionWrapper>
        <Image src={aspas} alt="aspas" />
        <S.Description>{message}</S.Description>
      </S.DescriptionWrapper>
      <S.ProfileWrapper>
        <Image
          src={profile ?? defaultProfile}
          alt="profile"
          width={32}
          height={32}
        />
        <S.NameProfile>{name}</S.NameProfile>
      </S.ProfileWrapper>
    </S.CardWrapper>
  );
};

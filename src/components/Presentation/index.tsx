import * as S from "./presentation.styled";
import Image from "next/image";
import presentation from "@/assets/images/presentation-image.png";
import Link from "next/link";

export const Presentation: React.FC = () => {
  return (
    <S.Wrapper id="home">
      <S.LeftSide>
        <S.WrapperContent>
          <S.Title>Saúde natural para os seus cabelos</S.Title>
          <S.Subtitle>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </S.Subtitle>
          <Link href="appointment" passHref>
            <S.Button>Agendar um horário</S.Button>
          </Link>
        </S.WrapperContent>
      </S.LeftSide>
      <S.RightSide>
        <S.ImageWrapper>
          <Image src={presentation} alt="presentation-image" />
        </S.ImageWrapper>
      </S.RightSide>
    </S.Wrapper>
  );
};

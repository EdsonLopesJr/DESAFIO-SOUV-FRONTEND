import Image from "next/image";
import * as S from "./about.styled";
import aboutImage from "@/assets/images/about-image.png";

export const About: React.FC = () => {
  return (
    <S.Wrapper id="about">
      <S.ImageWrapper>
        <Image src={aboutImage} alt="about-image" />
      </S.ImageWrapper>
      <S.Section>
        <S.Title>Sobre nós</S.Title>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
          quis bibendum diam. Sed consequat nisl laoreet eros ultricies
          pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula
          risus.
        </S.Text>
        <S.Text>
          In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
          pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
          luctus, nunc finibus elementum suscipit, tortor augue vulputate
          sapien, vitae feugiat enim augue sed.
        </S.Text>
        <S.Text>
          Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
          rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
          tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
          nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
          dolor. Nullam eget dui at sem ullamcorper luctus.
        </S.Text>
      </S.Section>
    </S.Wrapper>
  );
};

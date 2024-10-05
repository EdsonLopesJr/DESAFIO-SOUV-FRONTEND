import Image from "next/image";
import * as S from "./footer.styled";
import logo from "@/assets/images/logo-footer.svg";
import instagramIcon from "@/assets/icon/footer/instagram.svg";
import youtubeIcon from "@/assets/icon/footer/youtube.svg";
import facebookIcon from "@/assets/icon/footer/facebook.svg";

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.CopyrightWrapper>
        <Image src={logo} alt="logo" />
        <S.TextItem>©2021 Beautysalon.</S.TextItem>
        <S.TextItem>Todos os direitos reservados.</S.TextItem>
      </S.CopyrightWrapper>
      <S.SocialRedeWrraper>
        <S.SocialRedeItem>
          <Image src={instagramIcon} alt="instagram-icon" />
        </S.SocialRedeItem>
        <S.SocialRedeItem>
          <Image src={facebookIcon} alt="facebook-icon" />
        </S.SocialRedeItem>
        <S.SocialRedeItem>
          <Image src={youtubeIcon} alt="youtube-icon" />
        </S.SocialRedeItem>
      </S.SocialRedeWrraper>
    </S.Wrapper>
  );
};

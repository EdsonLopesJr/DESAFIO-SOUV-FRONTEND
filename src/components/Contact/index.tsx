import Image from "next/image";
import * as S from "./contact.styled";
import whatsappButtonIcon from "@/assets/icon/button/whatsapp.svg";
import phoneIcon from "@/assets/icon/phone.svg";
import mapIcon from "@/assets/icon/map-pin.svg";
import mailIcon from "@/assets/icon/mail.svg";
import { Footer } from "./footer";

export const Contact: React.FC = () => {
  return (
    <S.Wrapper id="contact">
      <S.ContainerWrapper>
        <S.LeftSection>
          <S.ContentWrapper>
            <S.Title>Entre em contato com a gente!</S.Title>
            <S.Description>
              Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
              ouvir suas críticas e sugestões.
            </S.Description>
            <S.Button>
              <Image src={whatsappButtonIcon} alt="whatsapp-icon" />
              Entrar em contato
            </S.Button>
          </S.ContentWrapper>
        </S.LeftSection>
        <S.RightSection>
          <S.ContactList>
            <S.ContactItem>
              <Image src={phoneIcon} alt="phone-icon" />
              11 99845-6754
            </S.ContactItem>
            <S.ContactItem>
              <Image src={mapIcon} alt="map-icon" />
              R. Amauri Souza, 346
            </S.ContactItem>
            <S.ContactItem>
              <Image src={mailIcon} alt="mail-icon" />
              contato@beautysalon.com
            </S.ContactItem>
          </S.ContactList>
        </S.RightSection>
      </S.ContainerWrapper>
      <Footer />
    </S.Wrapper>
  );
};

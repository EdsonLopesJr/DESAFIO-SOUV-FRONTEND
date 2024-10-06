import { useService } from "@/context/ServiceContext";
import { Card } from "./components/Card";
import * as S from "./service.styled";

export const Service: React.FC = () => {
  const { services } = useService();
  return (
    <S.Wrapper id="service">
      <S.ContentWrapper>
        <S.Title>Serviços</S.Title>
        <S.Description>
          Com mais de 10 anos no mercado, o{" "}
          <S.FontWeight>Beautysalon</S.FontWeight> já conquistou clientes de
          inúmeros países com seus tratamentos exclusivos e totalmente naturais
        </S.Description>
      </S.ContentWrapper>

      <S.CardsWrapper>
        {services.map((service) => (
          <Card
            key={service.id}
            icon={service.icon}
            title={service.name}
            description={service.description}
          />
        ))}
      </S.CardsWrapper>
    </S.Wrapper>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import * as S from "./testimonial.styled";
import { Card } from "./Card";

export const Testimonial: React.FC = () => {
  return (
    <S.Wrapper id="testimonial">
      <S.Title>Depoimentos de quem já passou por aqui</S.Title>
      <S.CarroselWrapper>
        <Swiper
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Card
              message="Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.   "
              name="Wanessa Souza"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              message="Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon."
              name="Luna Falcão"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              message="Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.   "
              name="Wanessa Souza"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              message="Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon."
              name="Luna Falcão"
            />
          </SwiperSlide>
        </Swiper>
      </S.CarroselWrapper>
    </S.Wrapper>
  );
};

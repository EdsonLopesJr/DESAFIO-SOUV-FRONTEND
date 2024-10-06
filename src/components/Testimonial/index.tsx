import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import * as S from "./testimonial.styled";
import { Card } from "./Card";
import { useTestimonial } from "@/context/TestimonialContext";

export const Testimonial: React.FC = () => {
  const { testimonials } = useTestimonial();
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
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <Card
                key={testimonial.id}
                profile={testimonial.profile}
                message={testimonial.message}
                name={testimonial.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarroselWrapper>
    </S.Wrapper>
  );
};

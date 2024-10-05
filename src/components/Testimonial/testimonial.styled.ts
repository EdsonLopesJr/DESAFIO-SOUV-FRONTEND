import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 2.25rem;
  width: 481px;
  text-align: center;
`;

export const CarroselWrapper = styled.div`
  max-width: 1440px;
  padding: 0 5rem;
  @media (max-width: 900px) {
    max-width: 900px;
  }
  .swiper-slide {
    left: 50px;
  }
  .swiper-pagination {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 50px;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

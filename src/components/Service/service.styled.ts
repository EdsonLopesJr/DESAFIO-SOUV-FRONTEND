import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 900px) {
    height: 1553px;
    justify-content: flex-start;
    padding: 1.5rem 0;
  }
`;
export const ContentWrapper = styled.div`
  width: 523px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    width: 327px;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1.875;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  @media (max-width: 900px) {
    text-align: start;
  }
`;

export const FontWeight = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 900px) {
    display: block;
  }
`;

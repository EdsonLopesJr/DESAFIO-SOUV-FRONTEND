import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: 900px) {
    display: block;
    height: 1336px;
    margin: auto;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 581px;
  height: 405px;
  background-color: ${({ theme }) => theme.colors.secondary};

  img {
    position: absolute;
    top: 68px;
    left: 97px;
    width: 617px;
    height: 412px;

    @media (max-width: 900px) {
      width: 387.92px;
      height: 258.65px;
      top: 21.35px;
      left: 98.08;
    }
  }
  @media (max-width: 900px) {
    width: 365.29px;
    height: 254.26px;
    left: -111px;

    margin: 2.5rem auto;
  }
`;

export const Section = styled.section`
  margin-left: 4rem;
  margin-right: 7.5rem;
  width: 610px;
  height: 312px;

  @media (max-width: 900px) {
    width: 100%;
    height: 598px;
    padding: 0 1.5rem;
    margin: auto;
    margin-top: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 0.8rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperContent = styled.div`
  width: 396px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 90px;
  }
`;
export const Title = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 0.8rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1.875rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.9rem 2rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 50px;
  width: 218px;
  transition: 0.3s ease;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media (max-width: 900px) {
    height: 56 px;
    width: 214px;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 394px;
    height: 265px;
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
    right: 97px;

    @media (max-width: 900px) {
      width: 335.92px;
      height: 224.32px;
      top: 40.68px;
      right: 58.08px;
    }
  }

  @media (max-width: 900px) {
    width: 347.89px;
    height: 242.27px;
  }
`;

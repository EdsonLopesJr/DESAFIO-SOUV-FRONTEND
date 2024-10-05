import { styled } from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }
`;

export const CopyrightWrapper = styled.section``;

export const TextItem = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: 900px) {
    margin: 12px 0;
  }
`;

export const SocialRedeWrraper = styled.section`
  display: flex;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1rem;
  }
`;

export const SocialRedeItem = styled.a``;

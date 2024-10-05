import styled from "styled-components";

export const Card = styled.div`
  width: 352px;
  height: 352px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;

  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

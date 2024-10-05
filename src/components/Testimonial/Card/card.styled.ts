import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 544px;
  height: 264px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 4rem;
  gap: 1.5rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  color: ${({ theme }) => theme.colors.dark};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const NameProfile = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
  }
`;

export const LeftSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 404px;

  @media (max-width: 900px) {
    width: 327px;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

export const Button = styled.a`
  display: flex;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 50px;
  width: 236px;
  transition: 0.3s ease;
  font-weight: 500;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media (max-width: 900px) {
    height: 56 px;
    width: 236px;
  }
`;

export const RightSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactList = styled.ul`
  width: 262px;
`;

export const ContactItem = styled.li`
  display: flex;
  margin-bottom: 2rem;
  gap: 12px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

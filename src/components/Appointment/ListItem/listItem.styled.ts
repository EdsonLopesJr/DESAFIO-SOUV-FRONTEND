import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary}1F;
  z-index: 1;

  @media (max-width: 1025px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1.2);
  }

  @media (max-width: 900px) {
    transform: none;
    font-size: 2rem;
    font-weight: 900;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: auto;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const ThemeToggleButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ theme }) =>
    `linear-gradient(360deg, ${theme.colors.dark}, ${theme.colors.primary}, ${theme.colors.secondary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SideNavigation = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 900px) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 2rem;
`;

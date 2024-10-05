import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import menu from "@/assets/icon/menu.svg";
import close from "@/assets/icon/close.svg";
import * as S from "./header.styled";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";
import * as themes from "@/styles/themes";

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen((toggle) => !toggle);
  };

  const themesArray = [
    themes.forestDream,
    themes.royalAmethyst,
    themes.sunsetGlow,
    themes.urbanNight,
  ];

  const toggleTheme = () => {
    const currentThemeIndex = themesArray.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themesArray.length;
    const newTheme = themesArray[nextThemeIndex];

    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <S.HeaderContainer>
      <Image src={logo} alt="Beauty Salon Logo" width={165} height={25} />
      <S.Nav>
        <S.NavItem href="#home">Inicio</S.NavItem>
        <S.NavItem href="#about">Sobre</S.NavItem>
        <S.NavItem href="#service">Serviços</S.NavItem>
        <S.NavItem href="#testimonial">Depoimentos</S.NavItem>
        <S.NavItem href="#contact">Contato</S.NavItem>
        <S.ThemeToggleButton onClick={toggleTheme} />
      </S.Nav>
      <S.MenuIcon onClick={toggleMenu}>
        <Image src={menu} alt="icon-menu" />
      </S.MenuIcon>

      {isMenuOpen && (
        <S.SideNavigation>
          <S.CloseIcon onClick={toggleMenu}>
            <Image src={close} alt="icon-close" />
          </S.CloseIcon>
          <S.NavItem href="#home" onClick={toggleMenu}>
            Inicio
          </S.NavItem>
          <S.NavItem href="#about" onClick={toggleMenu}>
            Sobre
          </S.NavItem>
          <S.NavItem href="#service" onClick={toggleMenu}>
            Serviços
          </S.NavItem>
          <S.NavItem href="#testimonial" onClick={toggleMenu}>
            Depoimentos
          </S.NavItem>
          <S.NavItem href="#contact" onClick={toggleMenu}>
            Contato
          </S.NavItem>
          <S.ThemeToggleButton onClick={toggleTheme} />
        </S.SideNavigation>
      )}
    </S.HeaderContainer>
  );
};

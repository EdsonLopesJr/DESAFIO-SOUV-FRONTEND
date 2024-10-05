import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import menu from "@/assets/icon/menu.svg";
import close from "@/assets/icon/close.svg";
import * as S from "./header.styled";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((toggle) => !toggle);
  };
  return (
    <S.HeaderContainer>
      <Image src={logo} alt="Beauty Salon Logo" width={165} height={25} />

      <S.Nav>
        <S.NavItem>Inicio</S.NavItem>
        <S.NavItem>Sobre</S.NavItem>
        <S.NavItem>Serviços</S.NavItem>
        <S.NavItem>Depoimentos</S.NavItem>
        <S.NavItem>Contato</S.NavItem>
      </S.Nav>

      <S.MenuIcon onClick={toggleMenu}>
        <Image src={menu} alt="icon-menu" />
      </S.MenuIcon>

      {isMenuOpen && (
        <S.SideNavigation>
          <S.CloseIcon onClick={toggleMenu}>
            <Image src={close} alt="icon-close" />
          </S.CloseIcon>
          <S.NavItem href="#inicio" onClick={toggleMenu}>
            Inicio
          </S.NavItem>
          <S.NavItem href="#Sobre" onClick={toggleMenu}>
            Sobre
          </S.NavItem>
          <S.NavItem href="#Serviços" onClick={toggleMenu}>
            Serviços
          </S.NavItem>
          <S.NavItem href="#Depoimentos" onClick={toggleMenu}>
            Depoimentos
          </S.NavItem>
          <S.NavItem href="#Contato" onClick={toggleMenu}>
            Contato
          </S.NavItem>
        </S.SideNavigation>
      )}
    </S.HeaderContainer>
  );
};

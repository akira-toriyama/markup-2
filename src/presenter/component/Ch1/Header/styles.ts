import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;

  @media ${s.device.pc} {
    height: 100px;
  }
`;

export const Site = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 42px;
  margin-right: 10px;

  @media ${s.device.pc} {
    width: 59px;
    margin-right: 18px;
  }
`;

export const CorpName = styled.p`
  color: ${s.colors.darkGray};
  font-size: 12px;
  font-weight: ${s.fontWeight.bold};
  line-height: 1.4;

  @media ${s.device.pc} {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: ${s.colors.middleGray};
  font-size: 10px;
  line-height: 1.4;

  @media ${s.device.pc} {
    font-size: 12px;
  }
`;

export const HamburgerMenu = styled.button`
  box-sizing: content-box;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  width: 20px;
  height: 14px;
  cursor: pointer;
  color: ${s.colors.blue};

  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: currentColor;
    transform: translateY(5px);
    transition: 0.3s ease-in-out;
  }

  &::before {
    transform: translateY(-5px);
    box-shadow: 0 6px currentColor;
  }
`;

/**
 * スクリーンリーダ用に中身のテキストを消す
 */
export const ScreenReader = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.5s;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  color: #333333;
`;

export const NavItemBtn = styled.button`
  width: 148px;
  border-color: #cdd6dd;
`;

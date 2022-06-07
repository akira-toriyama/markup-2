import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const HeaderForSp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  position: relative;

  width: 84%;
  margin: 0 auto;
`;

export const HeaderForPc = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Site = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoForSp = styled.img`
  width: 42px;
  margin-right: 10px;
`;

export const LogoForPc = styled.img`
  width: 59px;
  margin-right: 18px;
`;

export const CorpNameForSp = styled.p`
  color: ${s.colors.darkGray};
  font-size: 12px;
  font-weight: ${s.fontWeight.bold};
  line-height: 1.4;
`;

export const CorpNameForPc = styled.p`
  color: ${s.colors.darkGray};
  font-size: 20px;
  font-weight: ${s.fontWeight.bold};
  line-height: 1.4;
`;

export const DescriptionForSp = styled.p`
  color: ${s.colors.middleGray};
  font-size: 10px;
  line-height: 1.4;
`;

export const DescriptionForPc = styled.p`
  color: ${s.colors.middleGray};
  font-size: 12px;
  line-height: 1.4;
`;

export const HamburgerMenu = styled.button<{ showMenu: boolean }>`
  box-sizing: content-box;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  width: 20px;
  height: 14px;
  cursor: pointer;
  color: ${(props) => (props.showMenu ? s.colors.white : s.colors.blue)};
  z-index: 1;
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
  z-index: 10;
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

export const NavForSp = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${s.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const NavItemsForSp = styled.ul`
  list-style: none;
  font-weight: bold;
  text-align: center;
`;

export const NavItemForSp = styled.li`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const ContactBtnForSp = styled.a`
  color: inherit;
  display: block;
  width: 208px;
  margin: 0 auto;
  padding: 11px 11px 13px;
  box-sizing: border-box;
  border: solid 2px currentColor;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  :hover {
    opacity: 0.75;
  }
`;

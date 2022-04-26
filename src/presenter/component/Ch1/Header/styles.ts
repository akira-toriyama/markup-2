import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  /* 中央配置 */
  margin: 0 auto;
  /* 最後の要素だけ右寄せ */
  > * {
    &:last-child {
      margin-left: auto;
    }
  }

  /* リキッドレイアウトpxではなくを考慮して%指定 */
  width: 84%;
  padding-top: 16px;
  padding-bottom: 16px;
  @media ${s.device.pc} {
    /* リキッドレイアウトpxではなくを考慮して%指定 */
    width: 91%;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100px;
  }
`;

export const TitleWrapper = styled.div`
  margin-left: 10px;
  @media ${s.device.pc} {
    margin-left: 18px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: ${s.fontWeight.bold};
  @media ${s.device.pc} {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 10px;
  color: ${s.colors.middleGray};
  @media ${s.device.pc} {
    font-size: 12px;
  }
`;

export const HamburgerMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HamburgerMenu = styled.button`
  /* デフォルトのpaddingがあると邪魔なので0 */
  padding: 0;
  /* 見た目を消す */
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
  }

  &::before {
    box-shadow: 0 6px currentColor;
    transform: translateY(-5px);
  }
`;

/**
 * スクリーンリーダ用に中身のテキストを消す
 */
export const screenReader = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  align-items: center;
`;

export const NavItemTxt = styled.p`
  font-size: 16px;
  font-weight: ${s.fontWeight.bold};
`;

export const NavItemBtn = styled.button`
  padding: 8px 20px;
  background: none;

  cursor: pointer;
  color: ${s.colors.blue};
  font-size: 16px;
  font-weight: ${s.fontWeight.bold};
  border: 2px solid ${s.colors.gray};
  border-radius: 20px;
`;

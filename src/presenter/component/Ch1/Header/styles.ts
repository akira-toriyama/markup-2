import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  @media ${s.device.desktop} {
    padding: 20px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* リキッドレイアウトpxではなくを考慮して%指定 */
  width: 84%;

  /* 中央配置 */
  margin: 0 auto;

  /* 最後の要素だけ右寄せ */
  > * {
    &:last-child {
      margin-left: auto;
    }
  }
`;

export const TitleWrapper = styled.div`
  margin-left: 10px;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: ${s.fontWeight.bold};
`;

export const Description = styled.p`
  font-size: 10px;
  color: ${s.colors.middleGray};
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

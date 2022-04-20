import styled from "styled-components";

export const Box = styled.div`
  /* サイズが予測しやすい */
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: green;
  border: solid 3px red;
`;

export const Txt = styled.p`
  /* 1remで最低サイズを確保
  vwビューポートの幅で文字を大きくする
  @media を使用したブレイクポイントでは 1pxの違いで大きなサイズ変化があるので良くない */
  font-size: calc(1rem + 0.5vw);
`;

export const SubTitle = styled.h2`
  /* rem ブロック要素に適している */
  font-size: 2.5rem;
  > strong {
    /* em インライン要素に適している */
    /* em 親要素のfont-sizeを基準に大きさを計算する */
    font-size: 1.125em;
  }
`;

import { ThemeProvider, createGlobalStyle, css } from "styled-components";
import { useApp } from "~/presenter/hooks/useApp";

type GlobalStyleProps = {
  /**
   * メニュー表示中は、オーバレイでスクリーンを表示する。
   */
  showMenu: boolean;
};
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    font-family: "Noto Sans Japanese", sans-serif;
    ${(props) =>
      props.showMenu &&
      css`
        height: 100%;
        overflow: hidden;
      `}
    animation: fade 5s;
    @keyframes fade {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
`;

export const theme = {} as const;

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProps> = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...useApp()} />
    {props.children}
  </ThemeProvider>
);

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans Japanese", sans-serif;
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

type Props = {
  children: React.ReactNode;
};

export const Theme: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1240px;
    margin: 0 auto;
    font-family: 'Noto Sans Japanese', sans-serif;
  }
`;

export const theme = {
  colors: {
    primary: "#2e5180",
    darkGray: "#333",
    middleGray: "#707F89",
    gray: "#CDD6DD",
    lightGray: "#EEF4F8",
    white: "#fff",
  },
} as const;

type Props = {
  children: React.ReactNode;
};

export const Theme: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);

import { ThemeProvider } from "styled-components";

export const theme = {
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
} as const;

type Props = {
  children: React.ReactNode;
};

export const Theme: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

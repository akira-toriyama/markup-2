export const device = {
  pc: "(min-width: 900px)",
} as const;

export const fontWeight = {
  regular: 400,
  bold: 900,
} as const;

// styled-components の themeにしても良いかも
export const colors = {
  blue: "#2e5180",
  darkGray: "#333",
  middleGray: "#707F89",
  gray: "#CDD6DD",
  lightGray: "#EEF4F8",
  white: "#fff",
} as const;

import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Message = styled.section`
  background-color: ${s.colors.blue};
  padding: 67px 0;
`;

export const Title = styled.h2`
  color: ${s.colors.white};
  font-size: 24px;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  color: ${s.colors.white};
  font-size: 14px;
`;

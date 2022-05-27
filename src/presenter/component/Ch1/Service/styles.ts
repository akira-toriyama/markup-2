import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const ServiceForSp = styled.section`
  padding: 67px 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 84%;
  margin: 0 auto;
`;

export const TitleForSp = styled.h2`
  border-bottom: dotted 2px currentColor;
  margin-bottom: 16px;
  padding-bottom: 9px;
  font-size: 24px;
  color: ${s.colors.blue};
  display: inline-block;
`;

export const Description = styled.p`
  color: ${s.colors.blue};
  font-size: 16px;
`;

export const ServiceForPc = styled.section`
  text-align: center;
  padding: 95px 0 87px;
`;

export const TitleForPc = styled.h2`
  border-bottom: dotted 2px currentColor;
  margin-bottom: 16px;
  padding-bottom: 9px;
  font-size: 36px;
  color: ${s.colors.blue};
  display: inline-block;
`;

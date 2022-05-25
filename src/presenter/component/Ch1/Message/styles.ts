import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const MessageForSp = styled.section`
  background-color: ${s.colors.blue};
  padding: 67px 0;
`;

export const MessageForPc = styled.section`
  background-color: ${s.colors.blue};
  padding: 81px 0;
`;

export const TitleForSP = styled.h2`
  color: ${s.colors.white};
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 1.67;
  text-align: center;
`;

export const TitleForPc = styled.h2`
  color: ${s.colors.white};
  margin-bottom: 24px;
  text-align: center;
  font-size: 36px;
  line-height: 1.33;
`;

export const DescriptionForSp = styled.p`
  color: ${s.colors.white};
  font-size: 14px;
  line-height: 1.86;
`;

export const DescriptionForPc = styled.p`
  color: ${s.colors.white};
  font-size: 14px;
  line-height: 1.86;
  max-width: 640px;
  margin: auto;
`;

export const Wrapper = styled.div`
  width: 84%;
  margin: 0 auto;
`;

import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  @media ${s.device.desktop} {
    padding: 20px 0;
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

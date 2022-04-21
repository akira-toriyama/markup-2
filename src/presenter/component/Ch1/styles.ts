import styled from "styled-components";
import { device } from "~/presenter/component/defined";

export const Header = styled.header`
  padding: 16px 0;
  @media ${device.desktop} {
    padding: 20px 0;
  }
`;

export const Hero = styled.section`
  padding: 33px 0;
  @media ${device.desktop} {
    padding: 47px 0;
  }
`;

export const Message = styled.section`
  padding: 67px 0;
  @media ${device.desktop} {
    padding: 81px 0;
  }
`;

export const Service = styled.section`
  padding: 67px 0;
  @media ${device.desktop} {
    padding: 95px 0;
  }
`;

export const Contact = styled.section`
  padding: 62px 0;
  @media ${device.desktop} {
    padding: 96px 0 62px 0;
  }
`;

export const Footer = styled.footer`
  padding: 38px 0 56px 0;
  @media ${device.desktop} {
    padding: 105px 0 88px 0;
  }
`;

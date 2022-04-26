import styled from "styled-components";
import { device } from "~/presenter/defined/styles";

export const Hero = styled.section`
  padding: 33px 0;
  @media ${device.pc} {
    padding: 47px 0;
  }
`;

export const Message = styled.section`
  padding: 67px 0;
  @media ${device.pc} {
    padding: 81px 0;
  }
`;

export const Service = styled.section`
  padding: 67px 0;
  @media ${device.pc} {
    padding: 95px 0;
  }
`;

export const Contact = styled.section`
  padding: 62px 0;
  @media ${device.pc} {
    padding: 96px 0 62px 0;
  }
`;

export const Footer = styled.footer`
  padding: 38px 0 56px 0;
  @media ${device.pc} {
    padding: 105px 0 88px 0;
  }
`;

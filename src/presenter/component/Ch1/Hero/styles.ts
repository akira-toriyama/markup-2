import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Hero = styled.section`
  height: 400px;
  background-image: url("/hero.jpg");
  background-position: center;
  background-size: cover;
  display: flex;

  @media ${s.device.pc} {
    height: 700px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
`;

export const Catch = styled.div`
  background-color: rgba(255, 255, 255, 0.76);
  flex: auto;
  padding: 33px 0;
  align-self: flex-end;

  @media ${s.device.pc} {
    padding: 47px 0 44px 0;
  }
`;

export const TitleWrapper = styled.div`
  width: 84%;
  margin: 0 auto;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  line-height: 1.3;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${s.colors.blue};
  margin-bottom: 15px;

  @media ${s.device.pc} {
    font-size: 16px;
    margin-bottom: 22px;
  }
`;

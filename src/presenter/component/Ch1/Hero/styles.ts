import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Hero = styled.section`
  height: 400px;
  background-image: url("/hero.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const Catch = styled.div`
  flex: auto;
  align-self: flex-end;
  padding: 33px 0;
  background-color: rgba(255, 255, 255, 0.76);
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleInnerTxt = styled.p`
  font-size: 14px;
  color: ${s.colors.blue};
`;

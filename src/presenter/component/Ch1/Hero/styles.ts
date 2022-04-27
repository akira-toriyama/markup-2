import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const Hero = styled.section`
  height: 400px;
  background-image: url("/hero.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: flex-end;
`;

export const Catch = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.76);
  text-align: center;
  padding: 33px 0;
`;

export const Title = styled.h1``;

export const TitleTxt = styled.p`
  font-size: 14px;
  color: ${s.colors.blue};
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
`;

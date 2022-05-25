import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const HeroForSp = styled.section`
  height: 400px;
  background-image: url("/hero.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const HeroForPc = styled.section`
  height: 700px;
  background-image: url("/hero.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
`;

export const CatchForSp = styled.div`
  background-color: rgba(255, 255, 255, 0.76);
  flex: auto;
  padding: 33px 0;
  align-self: flex-end;
`;

export const CatchForPc = styled.div`
  background-color: rgba(255, 255, 255, 0.76);
  flex: auto;
  padding: 47px 0 44px 0;
  align-self: flex-end;
`;

export const TitleWrapper = styled.div`
  width: 84%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  line-height: 1.3;
`;

export const DescriptionForSp = styled.p`
  font-size: 14px;
  color: ${s.colors.blue};
  margin-bottom: 15px;
`;

export const DescriptionForPc = styled.p`
  font-size: 16px;
  color: ${s.colors.blue};
  margin-bottom: 22px;
`;

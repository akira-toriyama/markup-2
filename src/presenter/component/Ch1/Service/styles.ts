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

export const DetailForSp = styled.div`
  margin-top: 53px;
  color: ${s.colors.darkGray};
`;

export const ArticleForSp = styled.article`
  &:not(:last-child) {
    margin-bottom: 67px;
  }
`;

export const ArticleTitleForSp = styled.h3`
  margin-bottom: 17px;
  font-size: 20px;
  line-height: 1.75;
`;

export const ArticleDescriptionForSp = styled.p`
  max-width: 264px;
  margin: 0 auto 25px;
  font-size: 12px;
  line-height: 2;
`;

export const ArticleImgForSp = styled.figure`
  height: 246px;
  margin-bottom: 22px;
  background-position: center;
  background-size: cover;
  background-image: url("/office.jpg");
`;

export const AnchorBtnForSp = styled.a`
  display: block;
  width: 208px;
  margin: 0 auto;
  padding: 11px 11px 13px;
  box-sizing: border-box;
  border: solid 2px currentColor;
  border-radius: 24px;
  color: ${s.colors.blue};
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  :hover {
    opacity: 0.75;
  }
`;

export const DetailForPc = styled.div`
  display: flex;
  margin-top: 75px;
  color: ${s.colors.darkGray};
`;

export const ArticleForPc = styled.article`
  flex: 1;
  margin-right: 3.22%;
  :first-child {
    margin-left: 3.22%;
  }
  display: flex;
  flex-direction: column;
`;

export const ArticleTitleForPc = styled.h3`
  margin-bottom: 26px;
  font-size: 30px;
  line-height: 1.4;
`;

export const ArticleDescriptionForPc = styled.p`
  margin: 0 auto 25px;
  font-size: 12px;
  line-height: 2;
  width: 78%;
`;

export const ArticleImgForPc = styled.figure`
  height: 360px;
  margin-bottom: 33px;
  background-position: center;
  background-size: cover;
  background-image: url("/office.jpg");
`;

export const AnchorBtnForPc = styled.a`
  display: block;
  width: 208px;
  margin: 0 auto;
  padding: 11px 11px 13px;
  box-sizing: border-box;
  border: solid 2px currentColor;
  border-radius: 24px;
  color: ${s.colors.blue};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: auto;
  :hover {
    opacity: 0.75;
  }
`;

import * as S from "./styles";
import NextImg from "next/image";

export const Header: React.FC = () => (
  <S.Header>
    <NextImg src="/bb.svg" width="42" height="42" alt="bb" />
    <S.TitleWrapper>
      <S.Title>BBアシスタントカンパニー</S.Title>
      <S.Description>確かなスタッフによる業務サポート</S.Description>
    </S.TitleWrapper>
  </S.Header>
);

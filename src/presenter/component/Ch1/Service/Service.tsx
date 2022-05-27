import * as S from "./styles";
import { useMedia } from "~/presenter/hooks/useMedia";

export const Service: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.ServiceForSp>
    <S.Wrapper>
      <S.TitleForSp>アシスタントサービス</S.TitleForSp>
      <S.Description>私達にできること</S.Description>
    </S.Wrapper>
  </S.ServiceForSp>
);

const Pc: React.FC = () => (
  <S.ServiceForPc>
    <S.Wrapper>
      <S.TitleForPc>アシスタントサービス</S.TitleForPc>
      <S.Description>私達にできること</S.Description>
    </S.Wrapper>
  </S.ServiceForPc>
);

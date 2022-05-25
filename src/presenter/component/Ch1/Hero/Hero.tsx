import * as S from "./styles";

import { useMedia } from "~/presenter/hooks/useMedia";

export const Hero: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.HeroForSp>
    <S.CatchForSp>
      <S.TitleWrapper>
        <h1>
          <S.Img src="/hero.svg" alt="BB Assistant Company" />
        </h1>
        <S.DescriptionForSp>
          縁の下の力持ちとしてお仕事を支えます
        </S.DescriptionForSp>
      </S.TitleWrapper>
    </S.CatchForSp>
  </S.HeroForSp>
);

const Pc: React.FC = () => (
  <S.HeroForPc>
    <S.CatchForPc>
      <S.TitleWrapper>
        <h1>
          <S.Img src="/hero.svg" alt="BB Assistant Company" />
        </h1>
        <S.DescriptionForPc>
          縁の下の力持ちとしてお仕事を支えます
        </S.DescriptionForPc>
      </S.TitleWrapper>
    </S.CatchForPc>
  </S.HeroForPc>
);

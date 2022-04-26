import * as S from "./styles";

export const Hero: React.FC = () => (
  <S.Hero>
    <S.Catch>
      <S.Title>
        <S.TitleInnerTxt>
          縁の下のちから持ちとしてお仕事を支えます
        </S.TitleInnerTxt>
        <S.Img src="/hero.svg" alt="BB Assistant Company" />
      </S.Title>
    </S.Catch>
  </S.Hero>
);

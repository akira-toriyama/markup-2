import * as S from "./styles";

export const Hero: React.FC = () => (
  <S.Hero>
    <S.Catch>
      <S.TitleWrapper>
        <h1>
          <S.Img src="/hero.svg" alt="BB Assistant Company" />
        </h1>
        <S.Description>縁の下の力持ちとしてお仕事を支えます</S.Description>
      </S.TitleWrapper>
    </S.Catch>
  </S.Hero>
);

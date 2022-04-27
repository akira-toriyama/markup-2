import * as S from "./styles";

export const Hero: React.FC = () => (
  <S.Hero>
    <S.Catch>
      <h1>
        <S.TitleTxt>縁の下のちから持ちとしてお仕事を支えます</S.TitleTxt>
        <S.Img src="/hero.svg" alt="BB Assistant Company" />
      </h1>
    </S.Catch>
  </S.Hero>
);

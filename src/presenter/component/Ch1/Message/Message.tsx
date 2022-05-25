import * as S from "./styles";
import { useMedia } from "~/presenter/hooks/useMedia";

export const Message: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.MessageForSp>
    <S.Wrapper>
      <S.TitleForSP>
        ビジネスアシスタントとしてサポートを続けて20年
      </S.TitleForSP>
      <S.DescriptionForSp>
        プロのビジネスアシスタントとして独立後、さまざまなお客様からご依頼をいただき、多様な業務、事業、効率化などのサポートを行ってきました。得意分野が多岐にわたるスタッフが揃っていますので、必要に応じてどのような業務にも対応いたし、雑事に振り回されることなく、重要な案件に取り組んでいただくことを目指しています。
      </S.DescriptionForSp>
    </S.Wrapper>
  </S.MessageForSp>
);

const Pc: React.FC = () => (
  <S.MessageForPc>
    <S.Wrapper>
      <S.TitleForPc>
        ビジネスアシスタントとしてサポートを続けて20年
      </S.TitleForPc>
      <S.DescriptionForPc>
        プロのビジネスアシスタントとして独立後、さまざまなお客様からご依頼をいただき、多様な業務、事業、効率化などのサポートを行ってきました。得意分野が多岐にわたるスタッフが揃っていますので、必要に応じてどのような業務にも対応いたし、雑事に振り回されることなく、重要な案件に取り組んでいただくことを目指しています。
      </S.DescriptionForPc>
    </S.Wrapper>
  </S.MessageForPc>
);

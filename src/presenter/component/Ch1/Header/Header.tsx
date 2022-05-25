import * as S from "./styles";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";

export const Header: React.FC = () => {
  const state = useHeader();
  return state.media === "pc" ? <Pc {...state} /> : <Sp />;
};

const Sp: React.FC = () => (
  <S.HeaderForSp>
    <S.Site>
      <S.LogoForSp src="/bb.svg" alt="BBアシスタントカンパニー" />
      <div>
        <S.CorpNameForSp>BBアシスタントカンパニー</S.CorpNameForSp>
        <S.DescriptionForSp>
          確かなスタッフによる業務サポート
        </S.DescriptionForSp>
      </div>
    </S.Site>
    <S.HamburgerMenu>
      <S.ScreenReader>menu</S.ScreenReader>
    </S.HamburgerMenu>
  </S.HeaderForSp>
);

const Pc: React.FC<type.LookUp<type.Props, "pc">> = () => (
  <S.HeaderForPc>
    <S.Site>
      <S.LogoForPc src="/bb.svg" alt="BBアシスタントカンパニー" />
      <div>
        <S.CorpNameForPc>BBアシスタントカンパニー</S.CorpNameForPc>
        <S.DescriptionForPc>
          確かなスタッフによる業務サポート
        </S.DescriptionForPc>
      </div>
    </S.Site>
    <nav>
      <ul>
        <li>
          <a>会社概要</a>
        </li>
        <li>
          <a>サービス</a>
        </li>
        <li>
          <button type="button">お問い合わせ</button>
        </li>
      </ul>
    </nav>
  </S.HeaderForPc>
);

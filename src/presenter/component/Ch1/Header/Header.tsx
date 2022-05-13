import * as S from "./styles";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";

const Menu: React.FC = () => (
  <S.HamburgerMenu>
    <S.ScreenReader>menu</S.ScreenReader>
  </S.HamburgerMenu>
);

const Nav: React.FC = () => (
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
);

const HeaderComponent: React.FC<type.Props> = (props) => (
  <S.Header>
    <S.Site>
      <S.Logo src="/bb.svg" alt="BBアシスタントカンパニー" />
      <div>
        <S.CorpName>BBアシスタントカンパニー</S.CorpName>
        <S.Description>確かなスタッフによる業務サポート</S.Description>
      </div>
    </S.Site>
    {props.media === "sp" && <Menu />}
    {props.media === "pc" && <Nav />}
  </S.Header>
);

export const Header: React.FC = () => <HeaderComponent {...useHeader()} />;

import * as S from "./styles";
import NextImg from "next/image";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";

const Menu: React.FC = () => (
  <S.HamburgerMenu>
    <S.screenReader>menu</S.screenReader>
  </S.HamburgerMenu>
);

const Nav: React.FC = () => (
  <nav>
    <S.NavItems>
      <li>
        <S.NavItemTxt>会社概要</S.NavItemTxt>
      </li>
      <li>
        <S.NavItemTxt>サービス</S.NavItemTxt>
      </li>
      <li>
        <S.NavItemBtn>お問い合わせ</S.NavItemBtn>
      </li>
    </S.NavItems>
  </nav>
);

const componentMap = {
  pc: {
    Logo: () => <NextImg src="/bb.svg" width="59" height="59" alt="bb" />,
  },
  sp: {
    Logo: () => <NextImg src="/bb.svg" width="42" height="42" alt="bb" />,
  },
} as const;

const HeaderComponent: React.FC<type.Props> = (props) => {
  const C = componentMap[props.media];

  return (
    <S.Header>
      <C.Logo />
      <S.TitleWrapper>
        <S.Title>BBアシスタントカンパニー</S.Title>
        <S.Description>確かなスタッフによる業務サポート</S.Description>
      </S.TitleWrapper>
      {props.media === "sp" && <Menu />}
      {props.media === "pc" && <Nav />}
    </S.Header>
  );
};

export const Header: React.FC = () => <HeaderComponent {...useHeader()} />;

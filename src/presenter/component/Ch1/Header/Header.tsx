import * as S from "./styles";
import NextImg from "next/image";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";
import { match } from "ts-pattern";

const MenuForDesktop: React.FC = () => <>desktop</>;

const MenuForSP: React.FC = () => (
  <S.HamburgerMenu>
    <S.screenReader>menu</S.screenReader>
  </S.HamburgerMenu>
);

const Menu: React.FC<type.Props> = (props) =>
  match(props)
    .with({ media: "desktop" }, () => <MenuForDesktop />)
    .with({ media: "sp" }, () => <MenuForSP />)
    .exhaustive();

const HeaderComponent: React.FC<type.Props> = (props) => (
  <S.Header>
    <NextImg src="/bb.svg" width="42" height="42" alt="bb" />
    <S.TitleWrapper>
      <S.Title>BBアシスタントカンパニー</S.Title>
      <S.Description>確かなスタッフによる業務サポート</S.Description>
    </S.TitleWrapper>
    <Menu {...props} />
  </S.Header>
);

export const Header: React.FC = () => <HeaderComponent {...useHeader()} />;

import * as S from "./styles";
import NextImg from "next/image";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";
import { match } from "ts-pattern";

const Logo: React.FC<type.Props> = (props) =>
  match(props)
    .with({ media: "pc" }, () => (
      <NextImg src="/bb.svg" width="59" height="59" alt="bb" />
    ))
    .with({ media: "sp" }, () => (
      <NextImg src="/bb.svg" width="42" height="42" alt="bb" />
    ))
    .exhaustive();

const Menu: React.FC<type.Props> = (props) =>
  match(props)
    .with({ media: "pc" }, () => <div>wip</div>)
    .with({ media: "sp" }, () => (
      <S.HamburgerMenu>
        <S.screenReader>menu</S.screenReader>
      </S.HamburgerMenu>
    ))
    .exhaustive();

const HeaderComponent: React.FC<type.Props> = (props) => (
  <S.Header>
    <Logo {...props} />
    <S.TitleWrapper>
      <S.Title>BBアシスタントカンパニー</S.Title>
      <S.Description>確かなスタッフによる業務サポート</S.Description>
    </S.TitleWrapper>
    <Menu {...props} />
  </S.Header>
);

export const Header: React.FC = () => <HeaderComponent {...useHeader()} />;

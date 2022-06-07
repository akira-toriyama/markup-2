import * as S from "./styles";
import { useHeader } from "./useHeader";
import type * as type from "./Header.type";

export const Header: React.FC = () => {
  const state = useHeader();
  return state.media === "pc" ? <Pc /> : <Sp {...state} />;
};

const Sp: React.FC<type.LookUp<type.Props, "sp">> = (props) => (
  <>
    {props.showMenu && (
      <>
        <S.NavForSp>
          <S.NavItemsForSp>
            <S.NavItemForSp>
              <a href="#">会社情報</a>
            </S.NavItemForSp>
            <S.NavItemForSp>
              <a href="#">サービス</a>
            </S.NavItemForSp>
            <S.NavItemForSp>
              <S.ContactBtnForSp href="#">お問い合わせ</S.ContactBtnForSp>
            </S.NavItemForSp>
          </S.NavItemsForSp>
        </S.NavForSp>
      </>
    )}
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
      <S.HamburgerMenu
        onClick={props.actions.toggleMenu}
        showMenu={props.showMenu}
      >
        <S.ScreenReader>menu</S.ScreenReader>
      </S.HamburgerMenu>
    </S.HeaderForSp>
  </>
);

const Pc: React.FC = () => (
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
      <S.NavItemsForPc>
        <S.NavItemForPc>
          <a>会社概要</a>
        </S.NavItemForPc>
        <S.NavItemForPc>
          <a>サービス</a>
        </S.NavItemForPc>
        <S.NavItemForPc>
          <S.NavItemBtnPc type="button">お問い合わせ</S.NavItemBtnPc>
        </S.NavItemForPc>
      </S.NavItemsForPc>
    </nav>
  </S.HeaderForPc>
);

import * as S from "./styles";
import { useMedia } from "~/presenter/hooks/useMedia";

export const Footer: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.FooterForSp>
    <S.WrapperForSp>
      <S.InfoForSp>
        <S.SiteForSp>
          <S.LogoForSp src="/bb-white.svg" alt="ロゴ" />
          <div>
            <S.CorpForSp>BBアシスタントカンパニー</S.CorpForSp>
          </div>
        </S.SiteForSp>
        <S.AddressForSp>
          〒001-0001
          <br />
          北海道中央区南53条東西ビル8F
          <br />
          0001-1234-5678
        </S.AddressForSp>
      </S.InfoForSp>

      <S.SnsListForSp>
        <li>
          <a href="#">
            <S.SnsLogoForSp src="/logo-twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <S.SnsLogoForSp src="/logo-facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <S.SnsLogoForSp src="/logo-instagram.svg" alt="Instagram" />
          </a>
        </li>
      </S.SnsListForSp>
    </S.WrapperForSp>
  </S.FooterForSp>
);

const Pc: React.FC = () => (
  <S.FooterForPc>
    <S.WrapperForPc>
      <S.InfoForPc>
        <S.SiteForPc>
          <S.LogoForPc src="/bb-white.svg" alt="ロゴ" />
          <div>
            <S.CorpForPc>BBアシスタントカンパニー</S.CorpForPc>
          </div>
        </S.SiteForPc>
        <S.AddressForPc>
          〒001-0001
          <br />
          北海道中央区南53条東西ビル8F
          <br />
          0001-1234-5678
        </S.AddressForPc>
      </S.InfoForPc>

      <S.SnsListForPc>
        <li>
          <a href="#">
            <S.SnsLogoForPc src="/logo-twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <S.SnsLogoForPc src="/logo-facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <S.SnsLogoForPc src="/logo-instagram.svg" alt="Instagram" />
          </a>
        </li>
      </S.SnsListForPc>
    </S.WrapperForPc>
  </S.FooterForPc>
);

import * as S from "./styles";
import { useMedia } from "~/presenter/hooks/useMedia";

export const Service: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.ServiceForSp>
    <S.Wrapper>
      <S.TitleForSp>アシスタントサービス</S.TitleForSp>
      <S.Description>私達にできること</S.Description>

      <S.DetailForSp>
        <S.ArticleForSp>
          <S.ArticleImgForSp />
          <S.ArticleTitleForSp>
            オフィス業務
            <br />
            サポート
          </S.ArticleTitleForSp>
          <S.ArticleDescriptionForSp>
            書類管理、電話・メール応対、スケジュール管理、デジタルトランスフォーメーションなど、さまざまなオフィス業務のサポートを行います。
          </S.ArticleDescriptionForSp>
          <S.AnchorBtnForSp href="#">OFFICE</S.AnchorBtnForSp>
        </S.ArticleForSp>
        <S.ArticleForSp>
          <S.ArticleImgForSp />
          <S.ArticleTitleForSp>
            マネージメント
            <br />
            サポート
          </S.ArticleTitleForSp>
          <S.ArticleDescriptionForSp>
            プロジェクトチームの構成メンバーのマネージメント、案件の進捗管理、リーダーのアシスタントサポートなどを行います。
          </S.ArticleDescriptionForSp>
          <S.AnchorBtnForSp href="#">MANAGEMENT</S.AnchorBtnForSp>
        </S.ArticleForSp>

        <S.ArticleForSp>
          <S.ArticleImgForSp />
          <S.ArticleTitleForSp>
            調査・研究
            <br />
            サポート
          </S.ArticleTitleForSp>
          <S.ArticleDescriptionForSp>
            各種事業の立ち上げ、運営にかかわる調査・研究のサポートや、特定分野の専門家との提携のお手伝いなどを行います。
          </S.ArticleDescriptionForSp>
          <S.AnchorBtnForSp href="#" className="btn">
            RESEARCH
          </S.AnchorBtnForSp>
        </S.ArticleForSp>
      </S.DetailForSp>
    </S.Wrapper>
  </S.ServiceForSp>
);

const Pc: React.FC = () => (
  <S.ServiceForPc>
    <S.Wrapper>
      <S.TitleForPc>アシスタントサービス</S.TitleForPc>
      <S.Description>私達にできること</S.Description>
    </S.Wrapper>

    <S.DetailForPc>
      <S.ArticleForPc>
        <S.ArticleImgForPc />
        <S.ArticleTitleForPc>
          オフィス業務
          <br />
          サポート
        </S.ArticleTitleForPc>
        <S.ArticleDescriptionForPc>
          書類管理、電話・メール応対、スケジュール管理、デジタルトランスフォーメーションなど、さまざまなオフィス業務のサポートを行います。
        </S.ArticleDescriptionForPc>
        <S.AnchorBtnForPc href="#">OFFICE</S.AnchorBtnForPc>
      </S.ArticleForPc>
      <S.ArticleForPc>
        <S.ArticleImgForPc />
        <S.ArticleTitleForPc>
          マネージメント
          <br />
          サポート
        </S.ArticleTitleForPc>
        <S.ArticleDescriptionForPc>
          プロジェクトチームの構成メンバーのマネージメント、案件の進捗管理、リーダーのアシスタントサポートなどを行います。
        </S.ArticleDescriptionForPc>
        <S.AnchorBtnForPc href="#">MANAGEMENT</S.AnchorBtnForPc>
      </S.ArticleForPc>

      <S.ArticleForPc>
        <S.ArticleImgForPc />
        <S.ArticleTitleForPc>
          調査・研究
          <br />
          サポート
        </S.ArticleTitleForPc>
        <S.ArticleDescriptionForPc>
          各種事業の立ち上げ、運営にかかわる調査・研究のサポートや、特定分野の専門家との提携のお手伝いなどを行います。
        </S.ArticleDescriptionForPc>
        <S.AnchorBtnForPc href="#" className="btn">
          RESEARCH
        </S.AnchorBtnForPc>
      </S.ArticleForPc>
    </S.DetailForPc>
  </S.ServiceForPc>
);

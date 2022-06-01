import * as S from "./styles";
import { useMedia } from "~/presenter/hooks/useMedia";

export const Contact: React.FC = () =>
  useMedia().media === "pc" ? <Pc /> : <Sp />;

const Sp: React.FC = () => (
  <S.ContactForSp>
    <S.WrapperForSp>
      <S.TitleForSp>お問い合わせ</S.TitleForSp>
      <S.DescriptionForSp>
        もっと業務を効率化したい
        <br />
        マネージメントの煩わしさから開放されたい
        <br />
        本業に集中したいなどなど、
        <br />
        些細なことでもお気軽にお問い合わせください。
      </S.DescriptionForSp>

      <S.FormForSp>
        <p>
          <label>
            <S.SrOnly>名前</S.SrOnly>
            <S.InputForSp type="text" name="name" placeholder="名前" />
          </label>
        </p>
        <p>
          <label>
            <S.SrOnly>メールアドレス</S.SrOnly>
            <S.InputForSp
              type="email"
              name="email"
              placeholder="aaa@.aaa.aaa"
            />
          </label>
        </p>
        <p>
          <label>
            <S.SrOnly>メッセージ</S.SrOnly>
            <S.TextareaForSp name="msg" placeholder="調査の依頼" />
          </label>
        </p>
        <p>
          <S.SubmitBtnForSP type="button">送信</S.SubmitBtnForSP>
        </p>
      </S.FormForSp>
    </S.WrapperForSp>
  </S.ContactForSp>
);

const Pc: React.FC = () => (
  <S.ContactForPc>
    <S.WrapperForPc>
      <S.TextAreaForPc>
        <S.TitleForPc>お問い合わせ</S.TitleForPc>
        <S.DescriptionForPc>
          もっと業務を効率化したい
          <br />
          マネージメントの煩わしさから開放されたい
          <br />
          本業に集中したいなどなど、
          <br />
          些細なことでもお気軽にお問い合わせください。
        </S.DescriptionForPc>
      </S.TextAreaForPc>

      <S.FormForPc>
        <p>
          <label>
            <S.SrOnly>名前</S.SrOnly>
            <S.InputForPc type="text" name="name" placeholder="名前" />
          </label>
        </p>
        <p>
          <label>
            <S.SrOnly>メールアドレス</S.SrOnly>
            <S.InputForPc
              type="email"
              name="email"
              placeholder="aaa@.aaa.aaa"
            />
          </label>
        </p>
        <p>
          <label>
            <S.SrOnly>メッセージ</S.SrOnly>
            <S.TextareaForPc name="msg" placeholder="調査の依頼" />
          </label>
        </p>
        <p>
          <S.SubmitBtnForPc type="button">送信</S.SubmitBtnForPc>
        </p>
      </S.FormForPc>
    </S.WrapperForPc>
  </S.ContactForPc>
);

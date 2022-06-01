import styled from "styled-components";
import * as s from "~/presenter/defined/styles";

export const SrOnly = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const ContactForSp = styled.section`
  padding: 62px 0;
  background-color: ${s.colors.lightGray};
`;

export const WrapperForSp = styled.div`
  width: 84%;
  margin: 0 auto;
`;

export const TitleForSp = styled.h2`
  margin-bottom: 42px;
  font-size: 24px;
`;

export const DescriptionForSp = styled.p`
  font-size: 12px;
  line-height: 2.17;
`;

export const FormForSp = styled.form`
  margin-top: 46px;
`;

export const InputForSp = styled.input`
  width: 100%;
  margin-bottom: 17px;
  padding: 12px 20px 14px;
  border: solid 1px ${s.colors.gray};
  box-sizing: border-box;
  border-radius: 0;
  color: ${s.colors.darkGray};
  font-size: 16px;
  ::placeholder {
    color: ${s.colors.blue};
    opacity: 1;
  }
`;

export const TextareaForSp = styled.textarea`
  width: 100%;
  margin-bottom: 17px;
  padding: 12px 20px 14px;
  border: solid 1px ${s.colors.gray};
  box-sizing: border-box;
  border-radius: 0;
  height: 150px;
  color: ${s.colors.darkGray};
  font-size: 16px;
  ::placeholder {
    color: ${s.colors.blue};
    opacity: 1;
  }
`;

export const SubmitBtnForSP = styled.button`
  display: block;
  margin: 0 auto;
  padding: 11px 11px 13px;
  box-sizing: border-box;
  border: solid 2px currentColor;
  border-radius: 24px;
  color: #2e5180;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 0;
  border: none;
  background-color: ${s.colors.blue};
  color: ${s.colors.white};
  cursor: pointer;
`;

export const ContactForPc = styled.section`
  padding: 0;
`;

export const TextAreaForPc = styled.div`
  flex: 0 0 auto;
`;

export const WrapperForPc = styled.div`
  margin: 0 auto;
  background-color: ${s.colors.lightGray};
  padding: 96px 9% 62px;
  box-sizing: border-box;
  border-color: ${s.colors.lightGray};
  display: flex;
  justify-content: space-between;
`;

export const TitleForPc = styled.h2`
  margin-bottom: 42px;
  font-size: 36px;
`;

export const DescriptionForPc = styled.p`
  font-size: 14px;
  line-height: 1.86;
`;

export const FormForPc = styled.form`
  margin-top: 46px;
  flex: 1 1 auto;
  max-width: 457px;
  margin-left: 1em;
  margin-top: 0;
`;

export const InputForPc = styled.input`
  width: 100%;
  margin-bottom: 17px;
  padding: 12px 20px 14px;
  border: solid 1px ${s.colors.gray};
  box-sizing: border-box;
  border-radius: 0;
  color: ${s.colors.darkGray};
  font-size: 16px;
  ::placeholder {
    color: ${s.colors.blue};
    opacity: 1;
  }
`;

export const TextareaForPc = styled.textarea`
  width: 100%;
  margin-bottom: 17px;
  padding: 12px 20px 14px;
  border: solid 1px ${s.colors.gray};
  box-sizing: border-box;
  border-radius: 0;
  height: 150px;
  color: ${s.colors.darkGray};
  font-size: 16px;
  ::placeholder {
    color: ${s.colors.blue};
    opacity: 1;
  }
`;

export const SubmitBtnForPc = styled.button`
  display: block;
  width: 272px;
  margin: 0 auto;
  padding: 11px 11px 13px;
  box-sizing: border-box;
  border: solid 2px currentColor;
  border-radius: 24px;
  color: #2e5180;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  border: none;
  background-color: ${s.colors.blue};
  color: ${s.colors.white};
  cursor: pointer;
`;
